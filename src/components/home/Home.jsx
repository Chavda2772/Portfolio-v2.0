// import
import './Home.css'
// Components
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

function Home() {
  return (
    <div id='home' className='relative h-full w-full bg-skin-primary overflow-hidden'>
      <div className="absolute h-full w-full flex flex-col opacity-5 overflow-hidden">
        <span
          className='font-ducados italic w-full h-1/2 pt-12 pr-24 text-[18rem] uppercase flex justify-end sm:justify-start leading-none text-skin-secondary scroll-animation-home'
          data-aos="fade-left"
        >
          Mahesh
        </span>
        <span
          className='font-ducados italic w-full h-1/2 text-[18rem] pl-32 leading-none uppercase text-skin-secondary scroll-animation-home'
          data-aos="fade-left"
        >
          Chavda
        </span>
      </div>
      <div className="h-1/5 bg-skin-secondary w-1 ml-16 sm:ml-8 absolute bottom-0 z-[2]"></div>
      <div className='absolute bottom-1/4 ml-13 sm:ml-5 z-10 sm:bottom-56'>
        <a href='https://github.com/chavda2772' target='_blank'>
          <FaGithub className="text-3xl mb-3 cursor-pointer fill-skin-secondary hover:fill-skin-action" data-aos="fade-right" />
        </a>
        <a href='https://www.instagram.com/_mahesh_ahir_' target='_blank'>
          <AiFillInstagram className="text-3xl mb-3 cursor-pointer fill-skin-secondary hover:fill-skin-action" data-aos="fade-right" data-aos-delay="100" />
        </a>
        <a href='https://twitter.com/Mahesh_277' target='_blank'>
          <BsTwitterX className="text-3xl mb-3 cursor-pointer fill-skin-secondary hover:fill-skin-action" data-aos="fade-right" data-aos-delay="200" />
        </a>
        <a href='https://www.linkedin.com/in/mahesh-chavda/' target='_blank'>
          <FaLinkedinIn className="text-3xl cursor-pointer fill-skin-secondary hover:fill-skin-action" data-aos="fade-right" data-aos-delay="300" />
        </a>
      </div>
      <div className="w-full h-dvh flex justify-center items-end md:flex-col-reverse relative z-[2]">
        {/* Description */}
        <div className='w-1/2 md:w-full h-full md:h-1/2 flex justify-end md:justify-center' >
          <div className='flex flex-col justify-center items-start md:justify-start sm:pt-8 md:items-center sm:pr-0'>
            <div className='ml-6 sm:ml-2 mb-5 flex flex-col relative' data-aos="fade-right" data-aos-delay="400">
              <span className='text-skin-primary bg-skin-secondary p-2 pr-4 pl-4 font-semibold rounded-md z-10'>It&apos;s me</span>
              <span className='absolute right-1 -bottom-4 w-0 h-0 border-l-15 border-l-transparent border-r-15 border-r-transparent border-t-30 border-t-skin-secondary'></span>
            </div>
            <span className='text-skin-secondary text-6xl font-semibold md:text-4xl pb-3 sm:pb-10' data-aos="fade-right" data-aos-delay="500">Mahesh Chavda</span>
            <span className='text-skin-secondary text-left text-xl font-semibold' data-aos="fade-right" data-aos-delay="600">I am Software Engineer and<br />I build the things for web.</span>
          </div>
        </div>
        {/* Image */}
        <div className='relative w-1/2 md:w-full h-full md:h-4/6 sm:mt-20 flex justify-end md:justify-end items-center md:items-center flex-col overflow-hidden'>
          <img
            className='w-3/5 md:w-2/3 drop-shadow-custom select-none'
            src="/images/ProfessionalPhoto@2x.png"
            alt="logo" />
          <div className='absolute h-3/6 w-3/5 bg-shadow-custom md:w-5/6'></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
