interface Props {
  color?: string;
  className?: string;
}

export function Mail({ color = "white", className = "" }: Props) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.9987 5.83331L11.5062 10.6058C11.2519 10.7535 10.9631 10.8313 10.6691 10.8313C10.3751 10.8313 10.0863 10.7535 9.83203 10.6058L2.33203 5.83331M3.9987 3.33331H17.332C18.2525 3.33331 18.9987 4.07951 18.9987 4.99998V15C18.9987 15.9205 18.2525 16.6666 17.332 16.6666H3.9987C3.07822 16.6666 2.33203 15.9205 2.33203 15V4.99998C2.33203 4.07951 3.07822 3.33331 3.9987 3.33331Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
