// import
import './Projects.css'

import Project from './project';
import { FaLongArrowAltRight } from "react-icons/fa";

function Projects() {
  let projectList = [
    {
      name: 'Spyglass',
      imgSource: '/images/Spyglass@2x.png',
      gitLink: 'https://github.com/Chavda2772/ExtJs-Spyglass-Extension',
      chromeLink: 'https://chromewebstore.google.com/detail/lnoocafdflgdbjjhcpkajhjchmddhgoh',
      edgeLink: 'https://microsoftedge.microsoft.com/addons/detail/extjs-spyglass/gmnhihnnhiighhgbjlbnfbeehbgeigjn',
      externalLink: '',
      discription: 'Empower Sencha Ext JS developers with the ExtJS Spyglass Chrome extension. Easily inspect and debug Ext JS applications, navigate component hierarchies, modify.',
      techList: ['Ext JS', 'JavaScript']
    },
    {
      name: 'Chit Chat',
      imgSource: '/images/Spyglass@2x.png',
      discription: 'Chat application created.',
      gitLink: 'https://github.com/Chavda2772/ExtJs-Spyglass-Extension',
      externalLink: 'https://chitchat.chavdamahesh.com/home',
      techList: ['Vue JS', 'Node JS', 'Socket IO', 'MySql']
    },
    {
      name: 'Stash Note',
      imgSource: '/images/Spyglass@2x.png',
      discription: 'StashNote is a powerful todo list application designed for efficient task management. It offers a range of features to help you stay organized and on top of your tasks.',
      gitLink: 'https://github.com/Chavda2772/Stash-Note',
      externalLink: 'https://stashnote.chavdamahesh.com',
      techList: ['Ext JS', 'Node JS', 'MySql']
    }
  ];

  return (
    <div id='projects' className='relative bg-skin-primary'>
      <div className="absolute h-full w-full flex items-center opacity-5 overflow-hidden">
        <label className='text-[22rem] uppercase text-skin-secondary scroll-animation'>projects</label>
      </div>
      <div className="h-full bg-skin-secondary w-1 ml-16 absolute"></div>
      <a href='#projects' className='sticky md:absolute top-20 h-0 w-max text-skin-secondary before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-skin-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 cursor-pointer z-[12] hover:text-skin-action'>
        Projects
      </a>
      <div className="w-full min-h-full pt-20">
        {/* Projects */}
        <div className='flex flex-col items-center w-full' data-aos="fade-right">
          {
            projectList.map((project, idx) => {
              return <Project
                key={idx}
                id={idx + 1}
                isInverse={idx % 2 == 1}
                name={project.name}
                discription={project.discription}
                imgSource={project.imgSource}
                gitLink={project.gitLink}
                chromeLink={project.chromeLink}
                edgeLink={project.edgeLink}
                externalLink={project.externalLink}
                techList={project.techList}
              />
            })
          }
        </div>
        <div className='w-full flex justify-center'>
          <button className='bg-skin-secondary p-8 pt-3 m-6 pb-3 inline-flex rounded-md text-skin-primary z-10 hover:bg-skin-secondary/80 hover:text-skin-action active:scale-95'
            data-aos="fade-right"
          >
            Noteworthy Projects
            <FaLongArrowAltRight className='ml-6 text-2xl' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
