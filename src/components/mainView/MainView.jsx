// imports
import React from 'react';
import "./MainView.css"

import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    handleLoad() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting)
                    entry.target.classList.add('custom-show')
                else
                    entry.target.classList.remove('custom-show')
            })
        });

        let hiddenElement = document.querySelectorAll('.custom-hidden');
        hiddenElement.forEach((el) => observer.observe(el));
    }
    render() {
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
}


export default MainView;
