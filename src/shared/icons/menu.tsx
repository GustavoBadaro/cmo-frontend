interface Props {
  color?: string;
  className?: string;
}

export function Menu({ color = "white", className = "" }: Props) {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="22" height="1.5" rx="0.75" fill={color} />
      <rect y="7" width="18" height="1.5" rx="0.75" fill={color} />
      <rect y="14" width="22" height="1.5" rx="0.75" fill={color} />
    </svg>
  );
}
