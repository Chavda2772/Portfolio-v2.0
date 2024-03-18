// import
import './Home.css'
// Components
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

function Home() {
  return (
    <div id='home' className='relative h-full w-full bg-skin-primary overflow-hidden'>
      <div className="absolute h-full w-full flex flex-col justify-center opacity-5 overflow-hidden">
        <span className='w-full text-[11rem] uppercase font-semibold flex justify-end text-skin-secondary scroll-animation-home' data-aos="fade-left" >
          Mahesh
        </span>
        <span className='w-full text-[11rem] uppercase font-semibold flex text-skin-secondary justify-start scroll-animation-home' data-aos="fade-left">
          Chavda
        </span>
      </div>
      <div className="h-1/5 bg-skin-secondary w-1 ml-16 absolute bottom-0 z-[2]" data-aos="fade-top" data-aos-delay="300"></div>
      <div className='absolute bottom-36 ml-13 z-10 md:bottom-52'>
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
        <div className='w-1/2 md:w-full h-full md:h-1/2 flex justify-end' >
          <div className='flex flex-col justify-center items-start md:items-center pr-20 md:pr-auto'>
            <div className='ml-10 mb-5 flex flex-col relative' data-aos="fade-right" data-aos-delay="400">
              <span className='text-skin-primary bg-skin-secondary p-2 pr-4 pl-4 rounded-md z-10'>It&apos;s me</span>
              <span className='absolute right-1 -bottom-4 w-0 h-0 border-l-15 border-l-transparent border-r-15 border-r-transparent border-t-30 border-t-skin-secondary'>
              </span>
            </div>
            <span className='md:w-1/2 text-skin-secondary text-6xl md:text-4xl pb-3' data-aos="fade-right">Mahesh Chavda</span>
            <span className='md:w-1/2 text-skin-secondary text-center font-semibold text-xl md:ml-18' data-aos="fade-right" >I am Software Engineer and<br />I build the things for web.</span>
          </div>
        </div>
        {/* Image */}
        <div className='relative w-1/2 md:w-full h-full md:h-1/2 flex justify-end md:justify-end items-start md:items-center flex-col overflow-hidden'>
          <img className='w-3/5 md:w-2/3 drop-shadow-custom' src="/images/ProfessionalPhoto@2x.png" alt="logo" data-aos="fade-right" data-aos-delay="300"/>
          <div className='absolute h-3/6 w-3/5 bg-shadow-custom md:w-5/6'></div>
        </div>

        {/* image in div backup */}
        {/* <div className='w-1/2 md:w-full h-full md:h-1/2 homepage-photo'></div> */}
      </div>
    </div>
  );
}

export default Home;
