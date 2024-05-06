// import
import './Contact.css'

function Contact() {
  return (
    <section id='contact' className='relative bg-skin-primary w-full h-dvh'>
      <div className='absolute h-full w-full flex items-center justify-center opacity-5 overflow-hidden'>
        <label className='text-[28rem] tracking-widest italic font-ducados pt-36 text-skin-secondary uppercase scroll-animation-contact'>Contact</label>
      </div>
      <div className="h-3/5 bg-skin-secondary w-1 ml-16 sm:ml-8 absolute z-[2]"></div>
      <a href='#contact' className='sticky italic md:absolute top-20 sm:-ml-10 h-0 w-max text-skin-secondary before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-skin-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 cursor-pointer z-[12] hover:text-skin-action'>
        Contact
      </a>
      <div className='relative'>
        <div className="w-full h-dvh flex justify-center flex-col items-center relative z-10 md:m-auto">
          <div className='w-2/3 md:w-2/4 flex flex-col pb-10 text-3xl md:text-2xl'>
            <label
              className='text-center font-semibold text-skin-secondary'
              data-aos="fade-right"
            >
              My inbox is always open. Whether you have a question or
              just want to say hi, I will try my best to get back to you!</label>
          </div>
          <a href="mailto:contact@chavdamahesh.com" >
            <button href="#about"
              className="btn p-10 pt-3 pb-3 md:w-full md:mt-12"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Say Hello !!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
