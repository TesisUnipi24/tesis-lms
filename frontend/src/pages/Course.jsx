import { Link } from "react-router-dom";
import image from "../assets/image-1.jpg";
import Banner from "../assets/baner.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Course = () => {
  const [materi, setMateri] = useState([]);

  useEffect(() => {
    const fetchMateri = async () => {
      try {
        const token = localStorage.getItem("authToken");
        console.log(token);

        const payload = jwtDecode(token)
        console.log(payload)

        const response = await axios .get(
          "https://tesis-lms-api-v2.glitch.me/api/materi/get",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }, {}
        );
        console.log(response.data.data);
        setMateri(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMateri();
  }, []);

  return (
    <div>
      <div className='w-full h-72 text-white p-14 bg-cover bg-top'
              style={{
                backgroundImage: `url(${Banner})`,
              }}>
        <div className='breadcrumbs text-sm'>
          <ul>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <Link to='/learn'>Learning</Link>
            </li>
            <li>Course</li>
          </ul>
        </div>
        <div className='pt-5'>
          <h1 className='text-3xl font-semibold'>Mata Pelajaran Kelas 7</h1>
          <p className='w-3/4 pt-2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur facilis alias, odio magni ut, magnam officia id porro
            veniam, quae officiis! Saepe delectus modi sapiente nesciunt, fuga,
            enim pariatur eius porro quo quas
          </p>
        </div>
      </div>
      <div className='px-8 py-5'>
        <h1 className='font-semibold text-2xl text-slate-600 mb-3'>
          Roadmap Materi
        </h1>
        <hr className='border-none h-[1px] bg-gray-400' />
        <div className='flex flex-wrap lg:flex-row py-10 gap-10'>
          {materi.map((item, index) => (
            <Link
              to='/learn/modul'
              replace
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
                      className='text-white text-sm bg-teal-600 hover:bg-teal-700 btn transition duration-300 h-11 min-h-11'
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

export default Course;
