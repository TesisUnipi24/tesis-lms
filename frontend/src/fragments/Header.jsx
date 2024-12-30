import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbBellRinging } from "react-icons/tb";
import UserAccount from "../components/UserAccount";
import Notification from "../components/Notification";

const Header = () => {
  return (
    <header className='navbar bg-white z-20 fixed lg:pr-64'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex'>
          <button className='btn btn-square btn-ghost hover:bg-blue-50'>
            <GiHamburgerMenu className='text-xl' />
          </button>
        </div>
        <div className='flex lg:pr-2'>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle hover:bg-blue-50'
            >
              <div className='indicator'>
                <TbBellRinging className='text-xl' />
              </div>
            </div>
            <Notification />
          </div>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar hover:bg-blue-50'
            >
              <FaUserCircle className='text-4xl' />
            </div>
            <UserAccount />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
