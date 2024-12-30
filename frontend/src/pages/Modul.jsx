import { Link } from "react-router-dom";
import { mapelData } from "../data/data";
import { PiVideoFill } from "react-icons/pi";
import Banner from "../assets/baner.jpg";

const Modul = () => {
  return (
    <div>
      <div
        className='w-full h-72 text-white p-14 bg-cover bg-top'
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className='breadcrumbs text-sm'>
          <ul>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <Link to='/learn'>Learning</Link>
            </li>
            <li>
              <Link to='/learn/course'>Course</Link>
            </li>
            <li>Modul</li>
          </ul>
        </div>
        <div className='pt-5'>
          <h1 className='text-3xl font-semibold'>Ilmu Pengetahuan Sosial</h1>
          <p className='w-3/4 pt-2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur facilis alias, odio magni ut, magnam officia id porro
            veniam, quae officiis! Saepe delectus modi sapiente nesciunt, fuga,
            enim pariatur eius porro quo quas
          </p>
        </div>
      </div>
      <div className='flex flex-col mt-10 gap-5 px-32'>
        <div className='w-full bg-white rounded-sm shadow-md p-5'>
          <h1 className='text-xl font-medium text-slate-600'>
            Daftar Mata Pelajaran Ilmu Pengetahuan Sosial
          </h1>
          <p className='mt-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aperiam.
          </p>
        </div>
        <div className='w-full bg-white rounded-sm shadow-md p-5'>
          <h1 className='text-xl font-medium text-slate-600 mb-4'>
            Daftar Materi
          </h1>
          {mapelData.map((mapel, index) => (
            <div
              key={index}
              className='collapse collapse-arrow rounded-md'
            >
              <input
                type='checkbox'
                name='my-accordion-2'
                defaultChecked
              />
              <div className='collapse-title text-md font-medium border bg-teal-500 text-white'>
                {mapel.title}
              </div>
              <div className='collapse-content p-0'>
                <div className='px-5 mt-2'>
                  {mapel.content.map((item, index) => (
                    <>
                      <button
                        className='btn font-normal flex items-start flex-col rounded-md border-none w-full bg-white hover:bg-teal-500 group'
                        onClick={() =>
                          document.getElementById("my_modal_4").showModal()
                        }
                      >
                        <div
                          key={index}
                          className=' flex items-center gap-5 group-hover:text-white'
                        >
                          <PiVideoFill
                            // color='teal'
                            className='text-xl text-teal-500 group-hover:text-white'
                          />
                          {item.name}
                        </div>
                      </button>
                      <dialog
                        id='my_modal_4'
                        className='modal'
                      >
                        <div className='modal-box w-11/12 max-w-5xl p-6'>
                          <h3 className='font-bold text-lg mb-2'>
                            Selamat belajar...
                          </h3>
                          <iframe
                            width='100%'
                            height='500'
                            src={item.url}
                            title='YouTube video player'
                            frameborder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            referrerPolicy='strict-origin-when-cross-origin'
                            allowFullScreen
                          ></iframe>
                          <div className='modal-action'>
                            <form method='dialog'>
                              <button className='btn'>Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modul;
