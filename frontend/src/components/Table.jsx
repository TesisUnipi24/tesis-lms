import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Popup from "./Popup";

const Table = ({ users }) => {
  console.log(users);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <table className='table table-zebra text-center'>
      {/* head */}
      <thead className='text-sm'>
        <tr>
          <th>No</th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <th>{index + 1}</th>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <button
                className='btn bg-yellow-500 hover:bg-yellow-600 h-8 min-h-8 px-2'
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <FaPencilAlt
                  className='text-md'
                  color='white'
                />
              </button>
              <Popup
                title='Edit User'
                btnText='Save'
                onSubmit={handleSubmit}
              />
            </td>
            <td>
              <button className='btn bg-red-500 hover:bg-red-600 h-8 min-h-8 px-2'>
                <FaTrashAlt
                  className='text-md'
                  color='white'
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
