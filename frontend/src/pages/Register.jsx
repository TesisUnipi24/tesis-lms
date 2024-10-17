import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className='bg-teal-50 h-screen w-full'>
      <div className='flex justify-center items-center h-full'>
        <div className='w-full max-w-md bg-white p-8 shadow-md rounded-lg'>
          <h1 className='mb-1 text-2xl font-bold text-teal-600'>Register</h1>
          <p className='text-slate-500 mb-6'>
            Silahkan isi form berikut untuk melanjutkan.
          </p>
          <form>
            <p className='text-red-500'>{""}</p>
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
              id='password'
              type='password'
            >
              Password
            </Input>
            <Input
              id='confirmPassword'
              type='password'
            >
              Confirm Password
            </Input>
            <Button classname='w-full text-white bg-teal-600 hover:bg-teal-700'>
              Register
            </Button>
          </form>
          <p className='mt-3 text-center text-black'>
            Sudah memiliki akun?{" "}
            <Link
              to='/login'
              className='text-teal-600 font-bold'
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
