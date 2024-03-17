// Components
import MainView from './components/mainView/MainView';
import Loading from './components/loading/Loading';
import { useState, useEffect } from 'react';

// Styles
import './App.css';

// Components design
function App() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    useEffect(() => {
        if (localStorage.themeMode) {
            document.documentElement.classList.add(localStorage.themeMode);
        }
        else if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }

        let bodyEl = document.body;
        bodyEl.classList = [];
        bodyEl.classList.add(localStorage.themeColor ?? 'theme-default' );
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
