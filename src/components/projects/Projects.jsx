// import
import './Projects.css'

import Project from './project';

function Projects() {
  let projectList = [
    {
      name: 'Spyglass',
      discription: 'Empower Sencha Ext JS developers with the ExtJS Spyglass Chrome extension. Easily inspect and debug Ext JS applications, navigate component hierarchies, modify.'
    },
    {
      name: 'ChitChat',
      discription: 'Chat Applciation craeted.'
    }
  ];

  return (
    <div id='projects' className='relative'>
      <div className='absolute h-full w-full flex items-center justify-end overflow-hidden opacity-5'>
        <label className='text-[35rem] pl-24 uppercase select-none'>Projects</label>
      </div>
      <div className="h-full bg-secondary w-1 ml-16 absolute"></div>
      <p className='absolute top-20 before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 dark:text-white'>Projects</p>
      <div className="w-full min-h-dvh bg-primary dark:bg-blue-900 ">
        {/* Projects */}
        <div className='flex flex-col items-center w-full'>
          {
            projectList.map((project, idx) => {
              return <Project
                key={idx}
                id={idx + 1}
                isInverse={idx % 2 == 1}
                name={project.name}
                discription={project.discription}
              />
            })
          }
          {/* <Project />
        <Project isInverse={true} /> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
