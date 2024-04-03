// import
import { useState, useEffect } from "react";
import { v4 } from 'uuid';
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
      list: ['Visual Studio 2022', 'Visual studio code', 'Adobe XD']
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
    <div id='skills' className='relative h-full w-full bg-skin-primary'>
      <div className="absolute h-full w-full flex items-center opacity-5 overflow-hidden">
        <label className='text-[28rem] tracking-widest italic pt-20 font-ducados uppercase text-skin-secondary -ml-32 scroll-animation'>Skills</label>
      </div>
      <div className="h-full bg-skin-secondary w-1 ml-16 sm:ml-8 absolute z-10"></div>
      <a href='#skills' className='sticky italic sm:absolute sm:-left-8 top-20 w-max h-0 text-skin-secondary before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-skin-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 cursor-pointer z-[12] hover:text-skin-action'>
        Skills
      </a>
      <div className="flex w-full h-dvh items-center justify-center md:justify-start relative md:flex-col">
        <div
          className='w-1/3 sm:w-2/3 h-5/6 ml-36 sm:ml-10 mt-8 sm:mt-20 relative flex items-start justify-center flex-col md:w-max md:h-1/2'
          data-aos="fade"
        >
          <div className="h-4/6 bg-skin-secondary w-1 ml-1 absolute mt-8"></div>
          {
            skillsDetails.map((item, idx) => {
              let classList = "";
              if (item.name == selectedSkills.name)
                classList = 'before:inline-block before:w-5 before:h-5 before:mr-5 before:bg-skin-secondary before:rounded-full pl-0 p-3 text-3xl before:-ml-1 hover:cursor-pointer text-skin-action activate';
              else
                classList = 'text-skin-secondary before:inline-block before:w-3 before:h-3 before:mr-5 before:bg-skin-secondary before:rounded-full pl-0 p-3 text-xl hover:cursor-pointer hover:text-skin-action';

              return (
                <span
                  key={idx}
                  className={classList}
                  value={item}
                  onClick={onSkillSelect.bind(item, setSelectedSkills)}
                >
                  {item.name}
                </span>
              )
            })
          }
        </div>
        <div className='w-1/3 md:w-full h-dvh md:h-1/2 flex justify-start md:flex-col md:justify-center items-center mt-8'>
          <div
            data-aos="fade-right"
            className='w-3/4 md:w-2/4 flex items-start justify-center flex-col rounded-2xl bg-skin-secondary overflow-hidden'>
            {
              selectedSkills?.list?.map((item, idx) => {
                if (!item) return;
                return (
                  <h2
                    key={v4()}
                    className={`text-2xl p-3 pl-6 text-skin-primary hover:cursor-pointer hover:text-skin-action`}
                    data-aos="fade-right"
                    data-aos-delay={`${idx}00`}
                    data-aos-once="true"
                  >
                    {item}
                  </h2>);
              })
            }
          </div>
        </div>
      </div>
    </div >
  );
}

export default Skills;
