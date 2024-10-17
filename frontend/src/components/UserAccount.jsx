import { Link } from "react-router-dom";

const UserAccount = () => {
  return (
    <div
      id='dropdown-menu'
      className='absolute right-0 w-60 rounded-md shadow-md bg-white z-10'
    >
      <div className='py-2 p-2 divide-y'>
        <div>
          <a className='flex flex-col rounded-md px-4 py-2 text-sm'>
            <p className='font-semibold'>Mohamad Rizal Prasetyo</p>
            <p>rizalmohamad740@gmai.com</p>
          </a>
        </div>
        <div>
          <Link
            to='/'
            className='flex rounded-md px-4 py-1 my-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer'
          >
            Profile
          </Link>
        </div>
        <div>
          <Link
            to='/'
            className='flex rounded-md px-4 py-1 my-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer'
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
