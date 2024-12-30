const CardQuestion = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className='max-w-3xl mt-8 bg-white border border-gray-400 mx-auto shadow-sm'>
          <div
            key={index}
            className='bg-gray-300 px-5 py-3 text-xl font-semibold'
          >
            <h1>Question {index + 1}</h1>
          </div>
          <div className='px-5 pb-5'>
            <ul className='space-y-1 list-none divide-y'>
              <h2 className='py-6'>{item.question}</h2>
              {item.options.map((option, optIndex) => (
                <li
                  key={optIndex}
                  className='flex items-center gap-2 px-5 py-2 cursor-pointer hover:bg-blue-50'
                >
                  <input
                    type='radio'
                    id={`${index}.${optIndex}`}
                    name={`question-${index}`}
                    className='cursor-pointer'
                  />
                  <label
                    className='cursor-pointer'
                    htmlFor={`${index}.${optIndex}`}
                  >
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardQuestion;
