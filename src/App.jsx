// Components
import MainView from './pages/mainView/MainView';
import Projects from './pages/projects/ProjectsPage';

// Components
import Loading from './components/loading/Loading';

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';

// Styles
import './App.css';
import 'aos/dist/aos.css'

// Components design
function App() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1500);

    useEffect(() => {
        // Animation
        AOS.init({
            duration: 1000,
            once: true
        });

        // animation before end of element fix
        let scrollRef = 0;

        window.addEventListener('scroll', function () {
            // increase value up to 10, then refresh AOS
            scrollRef <= 10 ? scrollRef++ : AOS.refresh();
        });

        // Mode 
        if (localStorage.themeMode)
            document.documentElement.classList.add(localStorage.themeMode);
        else if (localStorage.themeMode === 'dark' || (!('themeMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            localStorage.themeMode = 'dark';
        }
        else
            localStorage.themeMode = 'light';

        // Theme
        let themeColor = localStorage.themeColor ?? 'theme-default';
        let bodyEl = document.body;
        bodyEl.classList = [];
        bodyEl.classList.add(themeColor);
        localStorage.themeColor = themeColor;
    }, []);

    return (
        <>
            {
                loading
                    ? <Loading />
                    : (
                        <BrowserRouter>
                            <Routes>
                                <Route path="projects" element={<Projects />} />
                                <Route path="*" element={<MainView />} />
                            </Routes>
                        </BrowserRouter>
                    )
            }
        </>
    )
}

export default App;
