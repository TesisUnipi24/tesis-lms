import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://tesis-lms-api.glitch.me/api/auth/register", {
        username: name,
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        navigate('/login')
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className='text-sm bg-teal-50 h-screen w-full'>
      <div className='flex justify-center items-center h-full'>
        <div className='w-full max-w-md bg-white p-8 shadow-md rounded-lg'>
          <h1 className='mb-1 text-2xl font-bold text-teal-600'>Register</h1>
          <p className='text-slate-600 mb-6'>
            Silahkan isi form berikut untuk melanjutkan.
          </p>
          <form onSubmit={handleSubmit}>
            <p className='text-red-500'>{""}</p>
            <div className='input-group relative mb-5'>
              <input
                className='input input-bordered w-full'
                id='name'
                type='text'
                placeholder='Nama'
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='input-group relative mb-5'>
              <input
                className='input input-bordered w-full'
                id='email'
                type='email'
                placeholder='Email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-group relative mb-5'>
              <input
                className='input input-bordered w-full'
                id='password'
                type='password'
                placeholder='Password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className='w-full text-white bg-teal-600 hover:bg-teal-700 text-base btn transition duration-300 h-11 min-h-11'
              type='submit'
            >
              Register
            </button>
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
