// import
import './Skills.css'

function Skills() {
  return (
    <div id='skills' className="flex w-full min-h-dvh justify-center bg-purple-300 items-center dark:bg-purple-900">
      <div className='w-1/3 h-dvh p-4 relative flex items-start justify-center flex-col'>
        <div className="h-2/3 bg-red-400 w-1 ml-1 absolute rounded-md"></div>
        <p className='before:inline-block before:w-5 before:h-5 before:-ml-1 before:mr-5 before:bg-red-500 before:rounded-full pl-0 p-3 text-3xl dark:text-white'>Frontend</p>
        <p className='before:inline-block before:w-3 before:h-3 before:mr-5 before:bg-red-500 before:rounded-full pl-0 p-3 text-xl dark:text-white'>Backend</p>
        <p className='before:inline-block before:w-3 before:h-3 before:mr-5 before:bg-red-500 before:rounded-full pl-0 p-3 text-xl dark:text-white'>Database</p>
        <p className='before:inline-block before:w-3 before:h-3 before:mr-5 before:bg-red-500 before:rounded-full pl-0 p-3 text-xl dark:text-white'>Tools</p>
        <p className='before:inline-block before:w-3 before:h-3 before:mr-5 before:bg-red-500 before:rounded-full pl-0 p-3 text-xl dark:text-white'>Language</p>
        <p className='before:inline-block before:w-3 before:h-3 before:mr-5 before:bg-red-500 before:rounded-full pl-0 p-3 text-xl dark:text-white'>Professinal Skills</p>
      </div>
      <div className='w-1/3 h-dvh flex justify-start items-center'>
        <div className='w-3/4 flex items-start justify-center flex-col rounded-2xl bg-black dark:bg-white/50'>
          <h2 className='text-2xl p-3 pl-6 text-white dark:text-black'>Javascript</h2>
          <h2 className='text-2xl p-3 pl-6 text-white dark:text-black'>Ext JS</h2>
          <h2 className='text-2xl p-3 pl-6 text-white dark:text-black'>React JS</h2>
          <h2 className='text-2xl p-3 pl-6 text-white dark:text-black'>Vue JS</h2>
          <h2 className='text-2xl p-3 pl-6 text-white dark:text-black'>Sass</h2>
          <h2 className='text-2xl p-3 pl-6 text-white dark:text-black'>Tailwind</h2>
        </div>
      </div>
    </div>
  );
}

export default Skills;
