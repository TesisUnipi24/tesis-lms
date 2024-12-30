import { FaPlus } from "react-icons/fa";
import Popup from "../components/Popup";
import Table from "../components/Table";
import { users } from "../data/data";

const User = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='px-8 py-5'>
      <h1 className='font-semibold text-2xl text-slate-600 mb-3'>User</h1>
      <hr className='border-none h-[1px] bg-gray-400' />
      <div className='p-5 mt-5 bg-white rounded-sm shadow-md'>
        <div className='flex items-center justify-between pb-3'>
          <h1 className='text-lg font-medium'>User Management</h1>
          <div>
            <button
              className='btn bg-blue-500 hover:bg-blue-600 h-8 min-h-8 px-2 text-white'
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Add
              <FaPlus
                className='text-lg'
                color='white'
              />
            </button>
            <Popup
              title='Add User'
              btnText='Add'
              onSubmit={handleSubmit}
            />
          </div>
        </div>
        <div className='overflow-x-auto'>
          <Table users={users} />
        </div>
      </div>
    </div>
  );
};

export default User;
