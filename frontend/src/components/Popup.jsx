import Input from "../components/Input";
import Button from "./Button";

const Popup = ({ title, btnText, onSubmit }) => {
  return (
    <dialog
      id='my_modal_1'
      className='modal'
    >
      <div className='modal-box'>
        <form method='dialog'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
        </form>
        <h3 className='font-bold text-lg pb-5'>{title}</h3>
        <div className='px-5 py-2'>
          <form onSubmit={onSubmit}>
            <Input
              id='id'
              type='text'
            >
              ID
            </Input>
            <Input
              id='name'
              type='text'
            >
              Name
            </Input>
            <Input
              id='email'
              type='email'
            >
              Email
            </Input>
            <Input
              id='role'
              type='text'
            >
              Role
            </Input>
            <Button classname='text-white bg-teal-600 hover:bg-teal-700'>
              {btnText}
            </Button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Popup;
