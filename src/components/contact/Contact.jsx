// import
import './Contact.css'

function Contact() {
  return (
    <section id='contact' className='relative'>
      <div className='absolute h-full w-full flex items-center justify-end z-[1] overflow-hidden opacity-5'>
        <label className='text-[35rem] pl-24'>CONTACT</label>
      </div>
      <div className="h-3/5 bg-secondary w-1 ml-16 absolute z-[2]"></div>
      <p className='absolute top-20 before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 z-[2] dark:text-white'>Contact</p>
      <div className='relative bg-primary dark:bg-slate-900'>
        <div className="w-full h-dvh flex justify-center flex-col items-center relative z-10">
          <div className='w-2/3 flex flex-col pb-10 text-3xl'>
            <label className='text-center font-semibold text-black dark:text-white'>My inbox is always open. Whether you have a question or
              just want to say hi, I will try my best to get back to you!</label>
          </div>
          <button className='bg-secondary p-8 pt-3 pb-3 rounded-md text-action dark:text-white hover:bg-secondary/80 active:scale-95'>Say Hello !!</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
