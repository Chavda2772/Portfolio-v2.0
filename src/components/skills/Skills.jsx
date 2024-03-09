// import
import './Skills.css'

function Skills() {
  return (
    <div id='skills' className='relative bg-primary'>
      <p className='absolute top-20 before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 dark:text-white'>Skills</p>
      <div className="h-full bg-secondary w-1 ml-16 absolute z-10"></div>
      <div className="flex w-full min-h-dvh justify-center items-center relative dark:bg-purple-900">
        <div className='w-1/3 h-dvh ml-36 mt-8 relative flex items-start justify-center flex-col'>
          <div className="h-3/6 bg-secondary w-1 ml-1 absolute mt-12"></div>
          <p className='before:inline-block before:w-5 before:h-5 before:-ml-1 before:mr-5 before:bg-secondary before:rounded-full pl-0 p-3 text-3xl dark:text-white'>Frontend</p>
          <p className='before:inline-block before:w-3 before:h-3 before:mr-5 before:bg-secondary before:rounded-full pl-0 p-3 text-xl dark:text-white'>Backend</p>
          <p className='before:inline-block before:w-3 before:h-3 before:mr-5 before:bg-secondary before:rounded-full pl-0 p-3 text-xl dark:text-white'>Database</p>
          <p className='before:inline-block before:w-3 before:h-3 before:mr-5 before:bg-secondary before:rounded-full pl-0 p-3 text-xl dark:text-white'>Tools</p>
          <p className='before:inline-block before:w-3 before:h-3 before:mr-5 before:bg-secondary before:rounded-full pl-0 p-3 text-xl dark:text-white'>Language</p>
          <p className='before:inline-block before:w-3 before:h-3 before:mr-5 before:bg-secondary before:rounded-full pl-0 p-3 text-xl dark:text-white'>Professinal Skills</p>
        </div>
        <div className='w-1/3 h-dvh flex justify-start items-center mt-8'>
          <div className='w-3/4 flex items-start justify-center flex-col rounded-2xl bg-secondary dark:bg-white/50'>
            <h2 className='text-2xl p-3 pl-6 text-white dark:text-black'>Javascript</h2>
            <h2 className='text-2xl p-3 pl-6 text-white dark:text-black'>Ext JS</h2>
            <h2 className='text-2xl p-3 pl-6 text-white dark:text-black'>React JS</h2>
            <h2 className='text-2xl p-3 pl-6 text-white dark:text-black'>Vue JS</h2>
            <h2 className='text-2xl p-3 pl-6 text-white dark:text-black'>Sass</h2>
            <h2 className='text-2xl p-3 pl-6 text-white dark:text-black'>Tailwind</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
