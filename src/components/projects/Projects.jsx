// import
import './Projects.css'

import Project from './project';
import { FaLongArrowAltRight } from "react-icons/fa";

function Projects() {
  let projectList = [
    {
      name: 'Spyglass',
      imgSource: '',
      discription: 'Empower Sencha Ext JS developers with the ExtJS Spyglass Chrome extension. Easily inspect and debug Ext JS applications, navigate component hierarchies, modify.'
    },
    {
      name: 'ChitChat',
      imgSource: '',
      discription: 'Chat Applciation created.'
    },
    {
      name: 'Stash Note',
      imgSource: '',
      discription: 'Non Login Data.'
    }
  ];

  return (
    <div id='projects' className='relative bg-skin-primary'>
      <div className="absolute h-full w-full flex items-center opacity-5 overflow-hidden">
        <label className='text-[22rem] uppercase text-skin-secondary scroll-animation'>projects</label>
      </div>
      <div className="h-full bg-skin-secondary w-1 ml-16 absolute"></div>
      <a href='#projects' className='sticky top-20 h-0 w-max text-skin-secondary before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-skin-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 cursor-pointer z-[12] hover:text-skin-action'>
        Projects
      </a>
      <div className="w-full min-h-full pt-20">
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
        </div>
        <div className='w-full flex justify-center'>
          <button className='bg-skin-secondary p-8 pt-3 m-6 pb-3 inline-flex rounded-md text-skin-primary z-10 hover:bg-skin-secondary/80 hover:text-skin-action active:scale-95'>
            Noteworthy Projects
            <FaLongArrowAltRight className='ml-6 text-2xl' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
