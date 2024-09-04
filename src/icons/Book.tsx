

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const Book = ({ className, width = 13, height = 22, color = "white" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13 22"
      fill="none"
      className={className}
    >
      <path
        d="M1.16602 1.25H7.66602C8.81529 1.25 9.91749 1.70655 10.7301 2.5192C11.5428 3.33186 11.9993 4.43406 11.9993 5.58333V20.75C11.9993 19.888 11.6569 19.0614 11.0474 18.4519C10.438 17.8424 9.6113 17.5 8.74935 17.5H1.16602V1.25Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8333 1.25H5.33333C4.18406 1.25 3.08186 1.70655 2.2692 2.5192C1.45655 3.33186 1 4.43406 1 5.58333V20.75C1 19.888 1.34241 19.0614 1.9519 18.4519C2.5614 17.8424 3.38805 17.5 4.25 17.5H11.8333V1.25Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Book;
