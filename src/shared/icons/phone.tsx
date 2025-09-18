interface Props {
  color?: string;
  className?: string;
}

export function Phone({ color = "white", className = "" }: Props) {
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
        d="M4.50065 3.33331H7.83398L9.50065 7.49998L7.41732 8.74998C8.30978 10.5596 9.77438 12.0242 11.584 12.9166L12.834 10.8333L17.0007 12.5V15.8333C17.0007 16.2753 16.8251 16.6993 16.5125 17.0118C16.1999 17.3244 15.776 17.5 15.334 17.5C12.0834 17.3024 9.01745 15.9221 6.71468 13.6193C4.4119 11.3165 3.03153 8.25059 2.83398 4.99998C2.83398 4.55795 3.00958 4.13403 3.32214 3.82147C3.6347 3.50891 4.05862 3.33331 4.50065 3.33331Z"
        stroke={color}
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
