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
    <div className={`flex justify-center items-center w-3/5 h-2/4 m-14 relative bg-skin-secondary p-6 rounded-lg ${isInverse ? ' flex-row-reverse' : ''}`}>
      <h3 className={`absolute text-8xl font-bold text-skin-secondary backdrop-blur-md bg-skin-primary/30 p-5 rounded-md -top-14 ${isInverse ? '-left-12' : '-right-12'}`}>
        {projectCount}
      </h3>
      <div className='w-1/2 h-full flex justify-center flex-col'>
        <h1 className={`text-2xl pb-3 text-skin-primary ${isInverse ? 'pl-6' : ''}`}>
          {name}
        </h1>
        <p className={`bg-skin-primary text-skin-secondary p-3 min-h-28 flex items-center font-semibold ${isInverse ? 'rounded-r-md' : 'rounded-l-md'}`}>
          {discription}
        </p>
        <div className={`pt-3 ${isInverse ? 'pl-6' : ''}`}>
          {
            techList?.map((itm, idx)=>{
              return <span key={idx} className='pr-3 text-skin-primary cursor-pointer hover:text-skin-action'>{itm}</span>;
            })
          }
        </div>
        <div className={`flex pt-2 ${isInverse ? 'pl-6' : ''}`}>
          {/* Github */}
          <a hidden={!project.gitLink} href={project.gitLink} target='_blank'>
            <FaGithub className="text-xl mr-3 text-skin-primary hover:text-skin-action" />
          </a>
          {/* Chrome */}
          <a hidden={!project.chromeLink} href={project.chromeLink} target='_blank'>
            <FaChrome className="text-xl mr-3 text-skin-primary hover:text-skin-action" />
          </a>
          {/* Edge */}
          <a hidden={!project.edgeLink} href={project.edgeLink} target='_blank'>
            <FaEdge className="text-xl mr-3 text-skin-primary hover:text-skin-action" />
          </a>
          {/* External */}
          <a hidden={!project.externalLink} href={project.externalLink} target='_blank'>
            <RiExternalLinkFill className="text-xl mr-3 text-skin-primary hover:text-skin-action" />
          </a>
        </div>
      </div>
      <div className='w-1/2 h-full flex items-center'>
        <img className='object-cover w-full rounded-md' src={project.imgSource} alt="" />
      </div>
    </div>
  );
}

export default Project;
