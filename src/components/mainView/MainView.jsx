// Components
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

function MainView() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default MainView;
