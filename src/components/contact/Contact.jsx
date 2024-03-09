// import
import './Contact.css'

function Contact() {
  return (
    <div id='contact' className='relative'>
      <div className="h-3/5 bg-secondary w-1 ml-16 absolute"></div>
      <p className='absolute top-20 before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 dark:text-white'>Contact</p>
      <div className="w-full h-dvh flex justify-center flex-col items-center bg-primary dark:bg-slate-900">
        <div className='w-1/2 flex flex-col pb-10 text-2xl'>
          <span className='text-center text-black dark:text-white'>My inbox is always open. Whether you have a question or
            just want to say hi, I will try my best to get back to you!</span>
        </div>
        <button className='bg-secondary p-8 pt-3 pb-3 rounded-md text-action dark:text-white hover:bg-secondary/80 active:scale-95'>Say Hello !!</button>
      </div>
    </div>
  );
}

export default Contact;
