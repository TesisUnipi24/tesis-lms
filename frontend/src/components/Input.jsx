const InputForm = ({ id, type, placeholder,}) => {
  return (
    <div className='input-group relative mb-5'>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required
        // onChange={handleInputChange}
        className='input input-bordered w-full'
      />
    </div>
  );
};

export default InputForm;
