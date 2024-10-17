import { Link } from "react-router-dom";
import Button from "./Button";

const Card = ({ src, title, description, to, btnText }) => {
  return (
    <Link to={to}>
      <div className='max-w-sm shadow-md rounded-lg overflow-hidden hover:-translate-y-6 duration-1000'>
        <img
          src={src}
          alt='image'
          className='w-full h-44 object-cover'
        />
        <div className='p-4'>
          <h5 className='text-xl font-semibold mb-2'>{title}</h5>
          <p className='text-gray-700 mb-4'>{description}</p>
          <Button classname='w-full text-white bg-teal-600 hover:bg-teal-700'>
            {btnText}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
