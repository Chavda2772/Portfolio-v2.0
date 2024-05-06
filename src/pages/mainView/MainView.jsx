// imports
import "./MainView.css"

import Navbar from '../../components/navbar/Navbar';
import Home from '../../components/home/Home';
import About from '../../components/about/About';
import Skills from '../../components/skills/Skills';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

import { useEffect } from "react";

function MainView() {
    const { pathname, hash } = window.location;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (hash) {
            window.location.href = `${pathname}${hash}`;
        }
    }, [hash]);

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}


export default MainView;
