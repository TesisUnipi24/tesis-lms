import Button from "./Button";

const Notification = () => {
  return (
    <div
      tabIndex={0}
      className='card card-compact dropdown-content bg-base-100 z-50 mt-3 w-96 shadow rounded-md'
    >
      <div className='card-body'>
        <h1 className='text-lg font-semibold'>Notification</h1>
        <div className='chat chat-start'>
          <div className='chat-bubble'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, libero.
            <br />Lorem ipsum dolor, sit amet consecm!
          </div>
        </div>
        <div className='card-actions'>
          <Button classname='w-full text-white bg-teal-600 hover:bg-teal-700'>
            Coba Coba
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
