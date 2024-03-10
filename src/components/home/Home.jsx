// import
import './Home.css'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div id='home' className='relative bg-primary overflow-hidden dark:bg-lime-950'>
      <div className="absolute h-full w-full flex flex-col justify-center opacity-10 scroll-animation">
        <span className='text-[13.5rem] uppercase font-semibold flex ml-32 justify-start w-full'>
          <span>Mahesh</span><br />
        </span>
        <span className='text-[13.5rem] uppercase font-semibold flex justify-end w-full'>
          <span>Chavda</span>
        </span>
      </div>
      <div className="h-1/5 bg-secondary w-1 ml-16 absolute bottom-0 z-[2]"></div>
      <div className='absolute bottom-36 ml-13 z-10'>
        <FaGithub className="text-3xl mb-3 cursor-pointer fill-secondary hover:fill-action" />
        <FaInstagram className="text-3xl mb-3 cursor-pointer fill-secondary hover:fill-action" />
        <FaTwitter className="text-3xl mb-3 cursor-pointer fill-secondary hover:fill-action" />
        <FaLinkedinIn className="text-3xl cursor-pointer fill-secondary hover:fill-action" />
      </div>
      <div className="w-full h-dvh flex justify-center items-center relative z-[2]">
        {/* Description */}
        <div className='w-1/2 flex justify-end'>
          <div className='flex flex-col justify-center items-start pr-20'>
            <div className='ml-10 mb-5 flex flex-col relative'>
              <span className='text-white bg-secondary p-2 pr-4 pl-4 rounded-md z-10'>It&apos;s me</span>
              <span className='absolute right-1 -bottom-4 w-0 h-0 border-l-15 border-l-transparent border-r-15 border-r-transparent border-t-30 border-t-secondary'>
              </span>
            </div>
            <span className='text-secondary dark:text-white text-6xl pb-3'>Mahesh Chavda</span>
            <span className='text-secondary font-semibold dark:text-white text-xl'>I am Software Engineer and <br />I build the things for web.</span>
          </div>
        </div>
        {/* Image */}
        <div className='w-1/2 h-full flex justify-end items-start flex-col'>
          <img className='w-3/5' src="/images/ProfessionalPhoto@2x.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
