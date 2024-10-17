const Button = ({ classname, children }) => {
  return (
    <div className='mt-5'>
      <button
        className={`${classname} py-2 rounded-md transition duration-300`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
