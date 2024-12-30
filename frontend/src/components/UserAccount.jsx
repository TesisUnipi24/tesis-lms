import { Link } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

const UserAccount = () => {
  return (
    <ul
      tabIndex={0}
      className='menu menu-sm dropdown-content bg-base-100 rounded-md mt-3 w-60 p-2 shadow divide-y'
    >
      <li>
        <div>
          <div className='flex flex-col rounded-md cursor'>
            <p className='font-semibold'>Mohamad Rizal Prasetyo</p>
            <p>rizalmohamad740@gmai.com</p>
          </div>
        </div>
      </li>
      <li>
        <Link
          to=''
          className='flex py-1 my-2'
        >
          <FaGear />
          Settings
        </Link>
      </li>
      <li>
        <Link
          to=''
          className='flex py-1 my-2'
        >
          <FiLogOut />
          Logout
        </Link>
      </li>
    </ul>
  );
};

export default UserAccount;
