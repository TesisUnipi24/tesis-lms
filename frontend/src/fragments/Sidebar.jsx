import {
  FaHome,
  FaBook,
  FaBookOpen,
  FaBookmark,
  FaComment,
  FaMedal,
  FaBell,
} from "react-icons/fa";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const Sidebar = () => {
  const menu = [
    { title: "Dashboard", icon: <FaHome />, path: "/" },
    { title: "Learning", icon: <FaBook />, path: "/learning" },
    { title: "Quizzes", icon: <FaBookOpen />, path: "/quiz", gap: true },
    { title: "Submission ", icon: <FaBookmark />, path: "/submission" },
    { title: "Diskusi", icon: <FaComment />, path: "/diskusi" },
    { title: "Progress", icon: <FaMedal />, path: "/progres" },
    { title: "Notifikasi", icon: <FaBell />, path: "/notifikasi", gap: true },
  ];

  return (
    <aside className='hidden lg:block shadow-md'>
      <div className='flex flex-col justify-between w-60 bg-white h-screen p-5 relative border-r-2'>
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
          {menu.map((item, index) => (
            <li
              key={index}
              className={`flex items-center rounded-md p-0 cursor-pointer transition duration-500 ease-in-out text-slate-700 hover:bg-blue-100 text-[17px]
              ${item.gap ? "mt-9" : "mt-2"}`}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-4 bg-teal-500 text-white w-full h-full rounded-md p-2"
                    : "flex items-center gap-4 p-2"
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
