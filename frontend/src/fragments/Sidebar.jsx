import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { menus } from "../data/data";

const Sidebar = () => {
  return (
    <aside className='hidden lg:block shadow-md fixed'>
      <div className='flex flex-col justify-between w-64 bg-white h-screen p-5 relative border-r-2'>
        <div className='flex gap-2 items-center'>
          <img
            src={logo}
            className='cursor-pointer duration-500'
          />
          <h1 className='text-teal-600 origin-left font-bold text-2xl duration-200'>
            Teman Siswa
          </h1>
        </div>
        <ul className='pt-6 h-full'>
          {menus.map((item, index) => (
            <li
              key={index}
              className={`text-base flex items-center rounded-md p-0 cursor-pointer transition duration-500 ease-in-out hover:bg-blue-50
              ${item.gap ? "mt-9" : "mt-2"}`}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-4 bg-teal-500 text-white w-full h-full rounded-md px-3 py-2"
                    : "flex items-center gap-4 py-2 px-3"
                }
              >
                <div className='text-lg'>{item.icon}</div>
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <Button classname='w-full text-white bg-teal-600 hover:bg-teal-700'>
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
