import { Link } from "react-router-dom";
import Button from "./Button";

const CardCourse = ({ src, title, description, to, btnText }) => {
  return (
    <Link to={to}>
      <div className='card lg:max-w-xs bg-base-100 image-full w-96 shadow-xl hover:-translate-y-4 duration-300'>
        <figure>
          <img
            src={src}
            alt='Shoes'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-white'>{title}</h2>
          <p className="text-white">{description}</p>
          <div className='card-actions justify-end'>
            <Button classname='btn text-sm text-white bg-teal-600 hover:bg-teal-700 border-none'>{btnText}</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardCourse;
