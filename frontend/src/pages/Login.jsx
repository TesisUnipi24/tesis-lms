import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <section className='bg-teal-50 h-screen w-full'>
      <div className='flex justify-center items-center h-full'>
        <div className='w-full max-w-md bg-white p-8 shadow-md rounded-lg'>
          <h1 className='text-2xl mb-1 font-bold text-teal-600'>Login</h1>
          <p className='text-slate-500 mb-6'>
            Silahkan masukan informasi akun kamu.
          </p>
          <form>
            <p className='text-red-500'>{""}</p>
            <Input
              id='name'
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
            <Button classname='w-full text-white bg-teal-600 hover:bg-teal-700'>
              Login
            </Button>
          </form>
          <p className='mt-3 text-center text-black'>
            Belum punya akun?{" "}
            <Link
              to='/register'
              className='text-teal-600 font-bold'
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
