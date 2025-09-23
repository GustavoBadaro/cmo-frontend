interface Props {
  color?: string;
  className?: string;
}

export function Check({ color = "white", className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      className={className}
    >
      <path
        d="M1.00879 5.18701L4.28896 8.81797L10.9914 1.18201"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
