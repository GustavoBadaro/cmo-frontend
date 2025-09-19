interface Props {
  color?: string;
  className?: string;
}

export function ChevronBottom({ color = "white", className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.195262 0.86201C0.455612 0.601661 0.877722 0.601661 1.13807 0.86201L6 5.72394L10.8619 0.86201C11.1223 0.601661 11.5444 0.601661 11.8047 0.86201C12.0651 1.12236 12.0651 1.54447 11.8047 1.80482L6.4714 7.13815C6.21105 7.3985 5.78895 7.3985 5.5286 7.13815L0.195262 1.80482C-0.0650874 1.54447 -0.0650874 1.12236 0.195262 0.86201Z"
        fill={color}
      />
    </svg>
  );
}
