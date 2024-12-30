import Sidebar from "../fragments/Sidebar";
import Header from "../fragments/Header";
import Footer from "../fragments/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className='text-sm text-gray-600 flex min-h-screen'>
      <Sidebar />
      <div className='lg:ml-64 w-full'>
        <Header />
        <section className="mt-16 flex flex-col justify-between h-full bg-slate-100 border-none">
          <Outlet />
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Layout;
