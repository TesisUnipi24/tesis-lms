import CardQuestion from "../components/CardQuestion";
import { quizData } from "../data/data";

const Quiz = () => {
  return (
    <div className='px-8 py-5'>
      <h1 className='font-semibold text-2xl mb-3'>Quiz</h1>
      <hr className='border-none h-[1px] bg-gray-400' />
      <div className='max-w-4xl mx-auto py-5'>
        <h1 className="text-2xl font-medium py-2">Intro to Web Developer Assigntment</h1>
        <hr className='border-none h-[1px] bg-gray-400' />
        <div className="flex justify-between flex-wrap py-6 gap-1">
          <p><span className="font-bold">Due </span>Oct25 at 20:00pm</p>
          <p><span className="font-bold">Point </span>100</p>
          <p><span className="font-bold">Question </span>25</p>
          <p><span className="font-bold">Available </span>Oct21 at 18:00pm - Oct25 at 20:00pm </p>
          <p><span className="font-bold">Time Limit </span>None</p>
        </div>
        <hr className='border-none h-[1px] bg-gray-400' />
      </div>
      <CardQuestion data={quizData} />
    </div>
  );
};

export default Quiz;
