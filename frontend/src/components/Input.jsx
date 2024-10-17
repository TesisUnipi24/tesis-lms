import { useState } from "react";

const InputForm = ({ id, type, children }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setIsFilled(value !== "");
    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailRegex.test(value));
    }
  };
  return (
    <div className='input-group relative mb-5'>
      <input
        id={id}
        type={type}
        required
        onChange={handleInputChange}
        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 ${
          isValidEmail || type !== "email"
            ? "border-teal-600 focus:ring-teal-600"
            : "border-red-500 focus:ring-red-500"
        }`}
      />
      <label
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-base text-slate-600 px-1 pointer-events-none transition-all duration-500 ${
          isFilled ? "top-0 text-sm bg-white" : ""
        }`}
      >
        {children}
      </label>
    </div>
  );
};

export default InputForm;
