import Card from "../components/CardModul";
import Image from "../assets/hero-bg.jpg";

const Learning = () => {
  return (
    <div className='flex flex-col h-full p-10'>
      <h1 className='font-semibold text-3xl text-slate-600 mb-3'>
        My Learning
      </h1>
      <hr className='border-none h-[1px] bg-gray-400' />
      <div className='flex flex-col lg:flex-row py-10 gap-4'>
        <Card
          src={Image}
          title='Kelas 7'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt'
          to='/learning/kelas'
          btnText='Lanjut belajar'
        />
        <Card
          src={Image}
          title='Kelas 8'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt'
          to='/learning/kelas'
          btnText='Lanjut belajar'
        />
        <Card
          src={Image}
          title='Kelas 9'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt'
          to='/learning/kelas'
          btnText='Lanjut belajar'
        />
        <Card
          src={Image}
          title='Kelas 10'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt'
          to='/learning/kelas'
          btnText='Lanjut belajar'
        />
      </div>
    </div>
  );
};

export default Learning;
