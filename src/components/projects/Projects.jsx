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
    <div id='projects' className="w-full min-h-dvh bg-blue-300 dark:bg-blue-900 ">
      {/* Projects */}
      <div className='flex flex-col items-center w-full'>
        {
          projectList.map((project, idx) => {
            return <Project
              key={idx}
              id={idx + 1}
              isInverse={idx % 2 == 0}
              name={project.name}
              discription={project.discription}
            />
          })
        }
        {/* <Project />
        <Project isInverse={true} /> */}
      </div>
    </div>
  );
}

export default Projects;
