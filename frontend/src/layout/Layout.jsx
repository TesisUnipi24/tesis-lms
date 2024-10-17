import Sidebar from "../fragments/Sidebar";
import Header from "../fragments/Header";
import Footer from "../fragments/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className='flex min-h-screen bg-gray-50'>
      <Sidebar />
      <div className='flex flex-col justify-between w-full'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
