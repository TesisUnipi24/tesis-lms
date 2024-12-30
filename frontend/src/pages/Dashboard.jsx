import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image from "../assets/image-1.jpg";

const Dashboard = () => {
  const [kelas, setKelas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKelas = async () => {
      try {
        const token = localStorage.getItem("authToken");
        console.log(token);

        const response = await axios.get(
          "https://tesis-lms-api-v2.glitch.me/api/kelas/get",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setKelas(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchKelas();
  }, []);

  if (loading) {
    return (
      <h1 className='flex justify-center items-center h-full text-2xl'>
        Loading....
      </h1>
    );
  }

  return (
    <div className='px-8 py-5'>
      <h1 className='font-semibold text-2xl text-slate-600 mb-3'>Selamat datang di Teman Siswa</h1>
      <hr className='border-none h-[1px] bg-gray-400' />
      <div className='flex flex-col gap-3'>
        <h1 className='font-semibold text-xl text-slate-600 mt-5 pb-'>
          Daftar kelas saya
        </h1>
        <div className='flex flex-wrap lg:flex-row gap-2'>
          {kelas.map((item, index) => (
            <Link
              to='learn/course'
              key={index}
            >
              <div className='card lg:max-w-xs bg-base-100 image-full w-96 shadow-xl hover:-translate-y-4 duration-300'>
                <figure>
                  <img
                    src={image}
                    alt={item.name}
                  />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title text-white'>{item.name}</h2>
                  <p className='text-white'>{item.description}</p>
                  <div className='card-actions justify-end'>
                    <button
                      className='text-white text-sm bg-teal-600 hover:bg-teal-700 btn transition duration-300 h-11 min-h-11 border-none'
                      type='submit'
                    >
                      Lanjut Belajar
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
