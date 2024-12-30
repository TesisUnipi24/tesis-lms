const Button = ({ classname, type, children }) => {
  return (
      <button
        className={`${classname} text-base btn transition duration-300 h-11 min-h-11`}
        type={type}
      >
        {children}
      </button>
  );
};

export default Button;
