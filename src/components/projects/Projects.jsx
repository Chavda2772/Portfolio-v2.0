// import
import './Projects.css'

import Project from './Project';
import { Link } from "react-router-dom";

function Projects() {
  let projectList = [
    {
      name: 'Spyglass',
      imgSource: '/images/SpyglassFilter.png',
      gitLink: 'https://github.com/Chavda2772/ExtJs-Spyglass-Extension',
      chromeLink: 'https://chromewebstore.google.com/detail/lnoocafdflgdbjjhcpkajhjchmddhgoh',
      edgeLink: 'https://microsoftedge.microsoft.com/addons/detail/extjs-spyglass/gmnhihnnhiighhgbjlbnfbeehbgeigjn',
      externalLink: '',
      discription: 'Empower Sencha Ext JS developers with the ExtJS Spyglass Chrome extension. Easily inspect and debug Ext JS applications, navigate component hierarchies, modify.',
      techList: ['Ext JS', 'JavaScript']
    },
    {
      name: 'Chit Chat',
      imgSource: '/images/Chitchat.png',
      discription: 'A dynamic messaging app featuring real-time communication, user status indicators, Google login integration, and customizable themes for a personalized experience.',
      gitLink: 'https://github.com/Chavda2772/ChitChat',
      externalLink: 'https://chitchat.chavdamahesh.com',
      techList: ['Vue JS', 'Node JS', 'Express JS', 'Firebase', 'Socket IO', 'MySql']
    },
    {
      name: 'IdeaNest',
      imgSource: '/images/IdeaNest.png',
      discription: 'IdeaNest is an intuitive application designed to organize ideas, links, and notes in one place, with features like link previews and folder organization. making it a versatile tool for managing resources efficiently.',
      gitLink: 'https://github.com/Chavda2772/IdeaNest',
      externalLink: 'https://ideanest.chavdamahesh.com',
      techList: ['Angular', 'Tailwind', 'Node JS', 'Express JS', 'MySql']
    },
    {
      name: 'Stash Note',
      imgSource: '/images/StashNote.png',
      discription: 'StashNote is a powerful todo list application designed for efficient task management. It offers a range of features to help you stay organized and on top of your tasks.',
      gitLink: 'https://github.com/Chavda2772/Stash-Note',
      externalLink: 'https://stashnote.chavdamahesh.com',
      techList: ['Ext JS', 'Node JS', 'Express JS', 'MySql']
    }
  ];

  return (
    <div id='projects' className='relative bg-skin-primary'>
      <div className="absolute h-full w-full flex items-start opacity-5 overflow-hidden">
        <label className='text-[32rem] tracking-widest italic font-ducados uppercase text-skin-secondary scroll-animation'>projects</label>
      </div>
      <div className="absolute h-full bg-skin-secondary w-1 ml-16 sm:ml-8"></div>
      <a href='#projects' className='sticky italic md:absolute top-20 sm:-left-8 h-0 w-max text-skin-secondary before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-skin-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 cursor-pointer z-[12] hover:text-skin-action'>
        Projects
      </a>
      <div className="w-full pt-28">
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
          <Link to="/projects">
            <button href="#about"
              className="btn p-10 pt-3 pb-3 md:w-full md:mt-12"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Noteworthy Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
