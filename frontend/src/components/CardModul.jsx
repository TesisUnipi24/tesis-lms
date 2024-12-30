import { PiVideoFill } from "react-icons/pi";

const CardModul = ({ title, content }) => {
  return (
    <div className='collapse collapse-arrow rounded-md'>
      <input
        type='checkbox'
        name='my-accordion-2'
        defaultChecked
      />
      <div className='collapse-title text-md font-medium border bg-teal-500 text-white'>
        {title}
      </div>
      <div className='collapse-content p-0 mt-3'>
        <ul className='divide-y px-7'>
          {content.map((item, index) => (
            <li
              key={index}
              className='p-4 flex items-center gap-5 hover:bg-blue-50 duration-300 cursor-pointer'
            >
              <PiVideoFill
                color='teal'
                className='text-xl'
              />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardModul;
