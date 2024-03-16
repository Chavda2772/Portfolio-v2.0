// import
import { useState, useEffect } from "react";
import './Skills.css'

function Skills() {
  // variables
  const [selectedSkills, setSelectedSkills] = useState([]);

  let skillsDetails = [
    {
      name: 'Frontend',
      list: ['JavaScript', 'Ext JS', 'React JS', 'Vue JS', 'Sass', 'Tailwind']
    },
    {
      name: 'Backend',
      list: ['Node JS', 'Dot Net Core']
    },
    {
      name: 'Database',
      list: ['MySql', 'Microsoft Sql', 'MongoDB']
    },
    {
      name: 'Tools',
      list: ['Visual Studio 2022', 'Visual studio code', '', 'Adobe XD']
    },
    {
      name: 'Language',
      list: ['English', 'Hindi', 'Gujarati']
    },
    {
      name: 'Professinal Skills',
      list: ['Team Work', 'Creativity', 'Project Management', 'Communication']
    }
  ];

  useEffect(() => {
    setSelectedSkills(skillsDetails[0])
  }, []);

  // Methods
  function onSkillSelect(changeValue) {
    changeValue(this);
  }

  // Template
  return (
    <div id='skills' className='relative bg-skin-primary overflow-hidden'>
      <div className="absolute h-full w-full flex items-center opacity-5 scroll-animation right-1/3">
        <label className='text-[22rem] uppercase pl-32'>Skills</label>
      </div>
      <a href='#skills' className='absolute top-20 before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-skin-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 z-[12] hover:text-skin-action dark:text-white'>
        Skills
      </a>
      <div className="h-full bg-skin-secondary w-1 ml-16 absolute z-10"></div>
      <div className="flex w-full min-h-dvh justify-center md:justify-start items-center relative md:flex-col md:mt-28">
        <div className='w-1/3 h-dvh ml-36 md:ml-56 mt-8 relative flex items-start justify-center flex-col md:w-full md:h-1/2'>
          <div className="h-3/6 md:h-full bg-skin-secondary w-1 ml-1 absolute mt-8"></div>
          {
            skillsDetails.map((item, idx) => {
              let classList = "";
              if (item.name == selectedSkills.name)
                classList = 'before:inline-block before:w-5 before:h-5 before:mr-5 before:bg-skin-secondary before:rounded-full pl-0 p-3 text-3xl dark:text-white before:-ml-1 hover:cursor-pointer text-skin-action';
              else
                classList = 'before:inline-block before:w-3 before:h-3 before:mr-5 before:bg-skin-secondary before:rounded-full pl-0 p-3 text-xl dark:text-white hover:cursor-pointer hover:text-skin-action';

              return (
                <p
                  key={idx}
                  className={classList}
                  value={item}
                  onClick={onSkillSelect.bind(item, setSelectedSkills)}
                >
                  {item.name}
                </p>
              )
            })
          }
        </div>
        <div className='w-1/3 md:w-full h-dvh md:h-1/2 flex justify-start md:justify-center items-center mt-8 md:mt-12'>
          <div className='w-3/4 md:w-2/4 flex items-start justify-center flex-col rounded-2xl bg-skin-secondary dark:bg-white/50'>
            {
              selectedSkills?.list?.map((item, idx) => {
                if(!item) return;
                return <h2 key={idx} className='text-2xl p-3 pl-6 text-white hover:cursor-pointer hover:text-skin-action dark:text-black'>{item}</h2>
              })
            }
          </div>
        </div>
      </div>
    </div >
  );
}

export default Skills;
