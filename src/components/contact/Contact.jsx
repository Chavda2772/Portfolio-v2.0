// import
import './Contact.css'

function Contact() {
  return (
    <div id='contact' className="w-full h-dvh flex justify-center flex-col items-center bg-lime-200 dark:bg-slate-900">
      <div className='w-1/2 flex flex-col pb-10 text-2xl'>
        <span className='text-center text-black dark:text-white'>My inbox is always open. Whether you have a question or
        just want to say hi, I will try my best to get back to you!</span>
      </div>
      <button className='bg-red-500 p-8 pt-3 pb-3 rounded-md text-black dark:text-white hover:bg-red-400 active:scale-95'>Say Hello !!</button>
    </div>
  );
}

export default Contact;
