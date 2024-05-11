// import Card from '../../components/projects/card/Card';
import Project from '../../components/projects/Project';
import Navbar from '../../components/navbar/Navbar';

import { useEffect } from "react";

function ProjectsPage() {
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
      gitLink: 'https://github.com/Chavda2772/ExtJs-Spyglass-Extension',
      externalLink: 'https://chitchat.chavdamahesh.com/home',
      techList: ['Vue JS', 'Node JS', 'Firebase', 'Socket IO', 'MySql']
    },
    {
      name: 'Stash Note',
      imgSource: '/images/StashNote.png',
      discription: 'StashNote is a powerful todo list application designed for efficient task management. It offers a range of features to help you stay organized and on top of your tasks.',
      gitLink: 'https://github.com/Chavda2772/Stash-Note',
      externalLink: 'https://stashnote.chavdamahesh.com',
      techList: ['Ext JS', 'Node JS', 'MySql']
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full min-h-full bg-skin-primary pt-28">
        {/* Projects */}
        <div
          className='w-full flex justify-center flex-wrap'
          data-aos="fade-right"
          data-aos-once="true"
          >
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
      </div>
    </>
  )
}


export default ProjectsPage;
