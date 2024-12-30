import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://tesis-lms-api-v2.glitch.me/api/auth/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data.status === "success") {
          const token = result.data.data.token;
          localStorage.setItem("authToken", token);

          alert(result.data.message);
          navigate("/"); 
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className='text-sm bg-teal-50 h-screen w-full'>
      <div className='flex justify-center items-center h-full'>
        <div className='w-full max-w-md bg-white p-8 shadow-md rounded-lg'>
          <h1 className='text-2xl mb-1 font-bold text-teal-600'>Login</h1>
          <p className='text-slate-600 mb-6'>
            Silahkan masukan informasi akun kamu.
          </p>
          <form onSubmit={handleSubmit}>
            <p className='text-red-500'>{""}</p>
            <div className='input-group relative mb-5'>
              <input
                className='input input-bordered w-full'
                id='email'
                type='email'
                placeholder='Masukan Email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-group relative mb-5'>
              <input
                className='input input-bordered w-full'
                id='password'
                type='password'
                placeholder='Masukan Password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className='w-full text-white bg-teal-600 hover:bg-teal-700 text-base btn transition duration-300 h-11 min-h-11'
              type='submit'
            >
              Login
            </button>
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
