import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaChrome, FaEdge } from "react-icons/fa6";

function ProjectCard(projectDetail) {
  // variables
  let projectCount = '01';
  let { id, name, discription, techList } = projectDetail;

  // validation
  if (id) projectCount = id.toString().padStart(2, "0")
  return (
    <div
      className='flex justify-center items-center w-2/6 m-14 mb-20 mt-20 relative bg-skin-secondary p-6 rounded-lg flex-row-reverse'
      data-aos='fade-right'
    >
      <h3 className='absolute text-8xl font-bold text-skin-secondary backdrop-blur-md bg-skin-primary/30 p-5 rounded-md -top-20 border-2 border-skin-secondary -right-12'>
        {projectCount}
      </h3>
      <div className='w-full  h-full flex justify-center flex-col'>
        <h1 className='text-3xl pb-3 text-skin-primary font-bold'>
          {name}
        </h1>
        <div className='w-full h-full flex items-center relative projectcontent'>
          <img
            className='object-contain h-full w-full rounded-md'
            src={projectDetail.imgSource}
            alt="project-image" />
          <p
            id='project-description'
            className='absolute bg-skin-primary/95 h-full text-skin-secondary flex items-center text-center text-xl p-8 rounded-md opacity-0 hover:opacity-100'
          >
            {discription}
          </p>
        </div>
        <div className='pt-3 flex sm:justify-center flex-row flex-wrap'>
          {
            techList?.map((itm, idx) => {
              return <span key={idx} className='pr-3 text-skin-primary cursor-pointer hover:text-skin-action font-semibold'>{itm}</span>;
            })
          }
        </div>
        <div className='flex pt-2 sm:justify-center'>
          {/* Github */}
          <a hidden={!projectDetail.gitLink} href={projectDetail.gitLink} target='_blank'>
            <FaGithub className="text-xl mr-3 text-skin-primary hover:text-skin-action" />
          </a>
          {/* Chrome */}
          <a hidden={!projectDetail.chromeLink} href={projectDetail.chromeLink} target='_blank'>
            <FaChrome className="text-xl mr-3 text-skin-primary hover:text-skin-action" />
          </a>
          {/* Edge */}
          <a hidden={!projectDetail.edgeLink} href={projectDetail.edgeLink} target='_blank'>
            <FaEdge className="text-xl mr-3 text-skin-primary hover:text-skin-action" />
          </a>
          {/* External */}
          <a hidden={!projectDetail.externalLink} href={projectDetail.externalLink} target='_blank'>
            <RiExternalLinkFill className="text-xl mr-3 text-skin-primary hover:text-skin-action" />
          </a>
        </div>
      </div>
    </ div>
  );
}

export default ProjectCard;