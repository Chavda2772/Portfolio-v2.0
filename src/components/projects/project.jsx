import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function Project({ id, isInverse, name, discription }) {
  // variables
  let projectCount = '01';

  // validation
  if (id) projectCount = id.toString().padStart(2, "0")
  isInverse ? isInverse : false;

  return (
    <div className={`flex justify-center items-center w-3/5 h-2/4 m-14 relative bg-secondary p-6 rounded-lg ${isInverse ? ' flex-row-reverse' : ''}`}>
      <h3 className={`absolute text-8xl font-bold text-secondary backdrop-blur-md bg-white/30 p-5 rounded-md -top-14 ${isInverse ? '-left-12' : '-right-12'}`}>
        {projectCount}
      </h3>
      <div className='w-1/2 h-full flex justify-center flex-col'>
        <h1 className={`text-2xl pb-3 text-primary ${isInverse ? 'pl-6' : ''}`}>
          {name}
        </h1>
        <p className={`bg-primary text-secondary p-3 min-h-28 flex items-center font-semibold ${isInverse ? 'rounded-r-md' : 'rounded-l-md'}`}>
          {discription}
        </p>
        <div className={`pt-3 ${isInverse ? 'pl-6' : ''}`}>
          <span className='pr-3 text-primary'>Ext JS</span>
          <span className='pr-3 text-primary'>Chrome</span>
          <span className='pr-3 text-primary'>Edge</span>
        </div>
        <div className={`flex pt-2 ${isInverse ? 'pl-6' : ''}`}>
          <FaGithub className="text-xl mr-3 cursor-pointer text-action" />
          <RiExternalLinkFill className="text-xl mr-3 cursor-pointer text-action" />
        </div>
      </div>
      <div className='w-1/2 h-full flex items-center'>
        <img className='object-cover w-full rounded-md' src="/images/Spyglass@2x.png" alt="" />
      </div>
    </div>
  );
}

export default Project;
