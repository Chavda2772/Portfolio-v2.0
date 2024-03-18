// Components
import MainView from './components/mainView/MainView';
import Loading from './components/loading/Loading';
import { useState, useEffect } from 'react';
import AOS from 'aos';

// Styles
import './App.css';
import 'aos/dist/aos.css'

// Components design
function App() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 2000);

    useEffect(() => {
        // Animation
        AOS.init({
            // easing: 'ease-in-out',
            duration: 1000,
            // once: false
        });

        if (localStorage.themeMode) {
            document.documentElement.classList.add(localStorage.themeMode);
        }
        else if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }

        let bodyEl = document.body;
        bodyEl.classList = [];
        bodyEl.classList.add(localStorage.themeColor ?? 'theme-default');
    }, []);

    return (
        <>
            {
                loading ? <Loading /> : <MainView />
            }
        </>
    )
}

export default App;
