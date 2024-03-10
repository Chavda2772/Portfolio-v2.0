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
    <div id='projects' className='relative overflow-hidden'>
      <div className="absolute h-full w-full flex items-center opacity-10 scroll-animation right-2/3">
        <label className='text-[22rem] uppercase pl-32'>projects</label>
      </div>
      <div className="h-full bg-secondary w-1 ml-16 absolute"></div>
      <a href="#projects" className='absolute top-20 before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 hover:text-action z-[12] dark:text-white'>
        Projects
      </a>
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
