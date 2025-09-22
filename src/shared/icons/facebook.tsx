interface Props {
  color?: string;
  className?: string;
}

export function Facebook({ color = "white", className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21.75 12.0234C21.75 6.64144 17.382 2.27344 12 2.27344C6.618 2.27344 2.25 6.64144 2.25 12.0234C2.25 16.7424 5.604 20.6717 10.05 21.5784V14.9484H8.1V12.0234H10.05V9.58594C10.05 7.70419 11.5808 6.17344 13.4625 6.17344H15.9V9.09844H13.95C13.4138 9.09844 12.975 9.53719 12.975 10.0734V12.0234H15.9V14.9484H12.975V21.7247C17.8988 21.2372 21.75 17.0837 21.75 12.0234Z"
        fill={color}
      />
    </svg>
  );
}
