import CardLearn from "../components/CardCourse";
import Image from "../assets/image-1.jpg";

const Learning = () => {
  return (
    <div className='px-8 py-5'>
      <h1 className='font-semibold text-2xl text-slate-600 mb-3'>
        Daftar Kelas
      </h1>
      <hr className='border-none h-[1px] bg-gray-400' />
      <div className='flex flex-wrap lg:flex-row py-10 gap-2'>
        <CardLearn
          src={Image}
          title='Kelas 7'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt'
          to='/learn/course'
          btnText='Lanjut belajar'
        />
        <CardLearn
          src={Image}
          title='Kelas 8'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt'
          to='/learn/course'
          btnText='Lanjut belajar'
        />
        <CardLearn
          src={Image}
          title='Kelas 9'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt'
          to='/learn/course'
          btnText='Lanjut belajar'
        />
      </div>
    </div>
  );
};

export default Learning;
