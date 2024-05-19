import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaChrome, FaEdge } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
function Project(project) {
  // variables
  let projectCount = '01';
  let { id, isInverse, name, discription, techList } = project;

  // validation
  if (id) projectCount = id.toString().padStart(2, "0")
  isInverse ? isInverse : false;

  return (
    <div
      className={`flex justify-center items-center w-1/2 sm:w-4/6 h-1/2 m-14 relative bg-skin-secondary p-6 rounded-lg ${isInverse ? ' flex-row-reverse' : ''}`}
      data-aos={`${isInverse ? 'fade-left' : 'fade-right'}`}
    >
      <h3 className={`absolute text-8xl sm:text-6xl font-bold text-skin-secondary backdrop-blur-md bg-skin-primary/30 p-5 rounded-md -top-20 sm:-top-10 border-2 border-skin-secondary -right-12 sm:-right-8`}>
        {projectCount}
      </h3>
      <div className='w-1/2 sm:w-full h-full flex justify-center flex-col'>
        <h1 className={`text-2xl pb-3 text-skin-primary ${isInverse ? 'pl-6 sm:pl-0' : ''}`}>
          {name}
        </h1>
        <div className='w-1/2 sm:w-full h-full sm:h-1/2 hidden sm:block'>
          <a href={project.imgSource} target='_blank'>
            <img className='object-cover w-full rounded-t-md' src={project.imgSource} alt="" />
          </a>
        </div>
        <div>
          <p className='bg-skin-primary text-skin-secondary p-3 min-h-28 flex items-center sm:text-center sm:font-semibold sm:rounded-b-md'>
            {discription}
          </p>
        </div>
        <div className={`pt-3 flex sm:justify-center flex-row flex-wrap ${isInverse ? 'pl-6 sm:pl-0' : ''}`}>
          {
            techList?.map((itm, idx) => {
              return <span key={idx} className='pr-3 text-skin-primary cursor-pointer hover:text-skin-action font-semibold'>{itm}</span>;
            })
          }
        </div>
        <div className={`flex pt-2 sm:justify-center ${isInverse ? 'pl-6 sm:pl-0' : ''}`}>
          {/* Github */}
          <a hidden={!project.gitLink} href={project.gitLink} target='_blank'>
            <FaGithub className="text-2xl mr-3 text-skin-primary hover:text-skin-action" />
          </a>
          {/* Chrome */}
          <a hidden={!project.chromeLink} href={project.chromeLink} target='_blank'>
            <FaChrome className="text-2xl mr-3 text-skin-primary hover:text-skin-action" />
          </a>
          {/* Edge */}
          <a hidden={!project.edgeLink} href={project.edgeLink} target='_blank'>
            <FaEdge className="text-2xl mr-3 text-skin-primary hover:text-skin-action" />
          </a>
          {/* External */}
          <a hidden={!project.externalLink} href={project.externalLink} target='_blank'>
            <RiExternalLinkFill className="text-2xl mr-3 text-skin-primary hover:text-skin-action" />
          </a>
        </div>
      </div>
      <div className='w-1/2 h-full sm:hidden flex items-center'>
        <a href={project.imgSource} target='_blank'>
          <img className='object-cover w-full rounded-md' src={project.imgSource} alt="" />
        </a>
      </div>
    </ div>
  );
}

export default Project;
