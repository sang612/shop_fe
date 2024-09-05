export const Button = ({
  isWhite = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      className={`
        ${
          isWhite
            ? "text-[#000] border-current border-2 hover:bg-[#000] hover:text-[#fff]"
            : ""
        } ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
