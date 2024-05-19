import ProjectCard from '../../components/projects/card/ProjectCard';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import { useEffect } from "react";

function ProjectsPage() {
  let baseUrl = 'https://project.chavdamahesh.com/';
  let projectList = [
    {
      name: 'Portfolio v1',
      imgSource: '/images/Projects/Portfolio_v1.png',
      gitLink: 'https://github.com/Chavda2772/portfolio',
      externalLink: 'https://v1.chavdamahesh.com',
      discription: 'Portfolio V1',
      techList: ['Html', 'Scss', 'JavaScript']
    },
    {
      name: 'Navigation menu',
      imgSource: '/images/Projects/navtigationMenu.png',
      gitLink: 'https://github.com/Chavda2772/Mini-Projects/tree/master/navigationMenu',
      externalLink: baseUrl + 'navigationMenu/',
      discription: 'Navigation Menu with collapsible feature.',
      techList: ['Html', 'Css', 'JavaScript']
    },
    {
      name: 'Clock',
      imgSource: '/images/Projects/Modern_Clock.png',
      discription: 'Analog realtime clock with Dark and light mode.',
      gitLink: 'https://github.com/Chavda2772/Mini-Projects/tree/master/clock',
      externalLink: baseUrl + 'clock/',
      techList: ['Html', 'Css', 'JavaScript']
    },
    {
      name: 'Progress step',
      imgSource: '/images/Projects/Step_Progress_bar-min.jpeg',
      discription: 'Progress bar with steps. Can add multiple steps and remove them.',
      gitLink: 'https://github.com/Chavda2772/Mini-Projects/tree/master/progressStep',
      externalLink: baseUrl + 'progressStep/',
      techList: ['Html', 'Css', 'JavaScript']
    },
    {
      name: 'Split Landing',
      imgSource: '/images/Projects/Split_landing.png',
      discription: 'Split landing page.',
      gitLink: 'https://github.com/Chavda2772/Mini-Projects/tree/master/landingPage',
      externalLink: baseUrl + 'splitLandingPage/',
      techList: ['Html', 'Css', 'JavaScript']
    },
    {
      name: 'Card Expanding',
      imgSource: '/images/Projects/Expanding_cards.png',
      discription: 'Exapand card on click. Random images on every refresh and Project is also responsive.',
      gitLink: 'https://github.com/Chavda2772/Mini-Projects/tree/master/cardExpanding',
      externalLink: baseUrl + 'cardExpanding/',
      techList: ['Html', 'Css', 'JavaScript']
    },
    {
      name: 'Random Images',
      imgSource: '/images/Projects/downloadRandomImages.jpg',
      discription: 'Random Images grid to download.',
      gitLink: 'https://github.com/Chavda2772/Mini-Projects/tree/master/downloadRandomImage',
      externalLink: baseUrl + 'downloadRandomImage/',
      techList: ['Html', 'Css', 'JavaScript']
    },
    {
      name: 'Login Form',
      imgSource: '/images/Projects/mordenInputForm.png',
      discription: 'Simple login form with morden input field.Label moves to top if input field on focus.',
      gitLink: 'https://github.com/Chavda2772/Mini-Projects/tree/master/mordenInputForm',
      externalLink: baseUrl + 'mordenInputForm/',
      techList: ['Html', 'Css', 'JavaScript']
    },
    {
      name: 'Scroll Animation',
      imgSource: '/images/Projects/Scroll_animate.png',
      discription: 'Reveals elements as you scroll down the page.',
      gitLink: 'https://github.com/Chavda2772/Mini-Projects/tree/master/scrollAnimation',
      externalLink: baseUrl + 'scrollAnimation/',
      techList: ['Html', 'Css', 'JavaScript']
    },
    {
      name: 'Simple Todo',
      imgSource: '/images/Projects/Simple_todo.png',
      discription: 'Todo list with browser Local storage. Your data is there until you manually delete.',
      gitLink: 'https://github.com/Chavda2772/Mini-Projects/tree/master/todoList',
      externalLink: baseUrl + 'todoList/',
      techList: ['Html', 'Css', 'JavaScript']
    },
    {
      name: 'Cards Design',
      imgSource: '/images/Projects/Card_layout.png',
      discription: 'Displays a card layout that reveals extra details on hover.',
      gitLink: 'https://github.com/Chavda2772/Mini-Projects/tree/master/cardLayout',
      externalLink: baseUrl + 'cardLayout/',
      techList: ['Html', 'Css', 'JavaScript']
    },
    {
      name: 'Search widget',
      imgSource: '/images/Projects/Search_widget.png',
      discription: 'click on search button and widget is visible.',
      gitLink: 'https://github.com/Chavda2772/Mini-Projects/tree/master/hiddenSearchWidget',
      externalLink: baseUrl + 'hiddenSearchWidget/',
      techList: ['Html', 'Css', 'JavaScript']
    },
    {
      name: 'Sound board',
      imgSource: '/images/Projects/Sound_board.png',
      discription: 'A mini project showcasing a clickable list of sound effects for easy playback.',
      gitLink: 'https://github.com/Chavda2772/Mini-Projects/tree/master/soundBoard',
      externalLink: baseUrl + 'soundBoard/',
      techList: ['Html', 'Css', 'JavaScript']
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-skin-primary pt-28">
        {/* Projects */}
        <div
          className='w-full flex justify-center flex-wrap'
          data-aos="fade-right"
          data-aos-once="true"
        >
          {
            projectList.map((project, idx) => {
              return <ProjectCard
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
      <Footer />
    </>
  )
}


export default ProjectsPage;
