// import
import './Home.css'

function Home() {
  return (
    <div id='home' className="w-full h-dvh flex justify-center items-center bg-lime-200 dark:bg-lime-950">
      {/* Description */}
      <div className='w-1/2 flex justify-end'>
        <div className='flex flex-col justify-center items-start pr-20'>
          <div className='ml-10 mb-5 flex flex-col relative'>
            <span className='text-white bg-gray-600 p-2 pr-4 pl-4 rounded-md z-10'>It&apos;s me</span>
            <span className='absolute right-1 -bottom-4 w-0 h-0 border-l-15 border-l-transparent border-r-15 border-r-transparent border-t-30 border-t-gray-600'>
            </span>
          </div>
          <span className='text-black dark:text-white text-6xl pb-3'>Mahesh chavda</span>
          <span className='text-black dark:text-white text-xl'>I build the things for web.</span>
        </div>
      </div>
      {/* Image */}
      <div className='w-1/2 h-full flex justify-end items-start flex-col'>
        <img className='w-3/5' src="/images/ProfessionalPhoto@2x.png" alt="logo" />
      </div>
    </div>
  );
}

export default Home;
