// import
import './Contact.css'

function Contact() {
  return (
    <section id='contact' className='relative bg-skin-primary w-full h-dvh overflow-hidden'>
      <div className='absolute h-full w-full flex items-center opacity-5 scroll-animation-contact left-52'>
        <label className='text-[22rem] uppercase'>Contact</label>
      </div>
      <div className="h-3/5 bg-skin-secondary w-1 ml-16 absolute z-[2]"></div>
      <a href="#contact" className='absolute top-20 before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-skin-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 z-[12] hover:text-skin-action dark:text-white'>
        Contact
      </a>
      <div className='relative'>
        <div className="w-full h-dvh flex justify-center flex-col items-center relative z-10">
          <div className='w-2/3 flex flex-col pb-10 text-3xl'>
            <label className='text-center font-semibold text-black dark:text-white'>My inbox is always open. Whether you have a question or
              just want to say hi, I will try my best to get back to you!</label>
          </div>
          <button className='bg-skin-secondary p-8 pt-3 pb-3 rounded-md text-skin-action dark:text-white hover:bg-skin-secondary/80 active:scale-95'>Say Hello !!</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
