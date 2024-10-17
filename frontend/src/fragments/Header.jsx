import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import UserAccount from "../components/UserAccount";

const Header = () => {
  const [userAccount, setUserAccount] = useState(false);

  const toggleUser = () => {
    setUserAccount(!userAccount);
  };

  return (
    <header className='flex justify-end items-center bg-white p-4 w-full pr-8 shadow-md'>
      <div className='relative inline-block text-left'>
        <FaUserCircle
          className='text-3xl text-slate-500 cursor-pointer'
          onClick={toggleUser}
        />
        {userAccount && <UserAccount />}
      </div>
    </header>
  );
};

export default Header;
