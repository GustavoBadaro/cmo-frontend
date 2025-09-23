interface Props {
  color?: string;
  className?: string;
}

export function Expand({ color = "white", className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path
        d="M7.5 7.5L10.5 10.5M10.5 10.5L10.5 8.09998M10.5 10.5L8.09998 10.5M7.5 4.5L10.5 1.5M10.5 1.5L10.5 3.9M10.5 1.5H8.09998M1.5 8.09998V10.5M1.5 10.5H3.9M1.5 10.5L4.5 7.5M1.5 3.9V1.5M1.5 1.5H3.9M1.5 1.5L4.5 4.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
    </svg>
  );
}
