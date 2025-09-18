export async function fetcher<T = unknown>(
  input: string,
  init?: RequestInit
): Promise<T> {
  try {
    let url = input;

    if (!url.startsWith("https://") && !url.startsWith("http://")) {
      url = `${process.env.STRAPI_BASE_URL}${input}`;
    }

    const response = await fetch(url, {
      ...init,
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        ...init?.headers,
      },
    });

    const data: T = await response.json();
    return data;
  } catch (err) {
    console.error(`[Error | ${input}]:`, err);
    throw err;
  }
}
