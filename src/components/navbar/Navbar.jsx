import './Navbar.css'

// Icons
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { GiPaintRoller } from "react-icons/gi";

// react
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    // global variables
    const navigate = useNavigate();

    // variables
    const [isDark, setIsDark] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('');
    const [isMute, setIsMute] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const themeList = ['theme-default', 'theme-swiss', 'theme-neon'];

    useEffect(() => {
        let muteState = localStorage.mute == 'true';
        setCurrentTheme(localStorage.themeColor);
        setIsDark(localStorage.themeMode == 'dark');
        setIsMute(muteState);

        // Audio playback
        let audioEl = document.getElementById('elAudio');

        if (!muteState) {
            audioEl.play().catch(() => {
                document.addEventListener("click", () => {
                    audioEl.play();
                }, { once: true });
            });

            localStorage.mute = true;
        }
    }, []);

    // Methods
    const onChangeMode = () => {
        changeThemeMode(isDark ? 'light' : 'dark');
    }

    const changeTheme = () => {
        let themeIdx = themeList.indexOf(currentTheme) + 1;

        if (themeIdx >= themeList.length) {
            themeIdx = 0;
        }

        let themeColor = themeList[themeIdx];
        changeApplicationTheme(themeColor)
        localStorage.themeColor = themeColor;
    }

    const onVolumeModeChange = () => {
        let audioEl = document.getElementById('elAudio');
        let mute = !isMute;

        // Audio play / pause
        if (mute) audioEl.pause();
        else audioEl.play();

        setIsMute(mute);
        localStorage.mute = mute;
    }
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    const navigateItem = (e) => {
        toggleMenu();

        let url = new URL(e.target.href);
        navigate('/'.concat(url.hash))
    }

    // Helper function
    const changeThemeMode = (theme) => {
        localStorage.themeMode = theme;
        setIsDark(theme === 'dark');

        if (theme === 'dark')
            document.documentElement.classList.add('dark');
        else
            document.documentElement.classList.remove('dark');
    }

    const changeApplicationTheme = function (theme) {
        let bodyEl = document.body;
        bodyEl.classList = [];
        bodyEl.classList.add(theme);
        setCurrentTheme(theme);
    }

    // Element
    return (
        <>
            <nav className="fixed w-full backdrop-blur-xl bg-skin-secondary/5 rounded-b-xl z-20">
                <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href='#'
                        onClick={() => navigate('/')}
                        className="ml-8"
                        data-aos="fade-right"
                    >
                        {/* Logo */}
                        <svg className='fill-skin-secondary hover:fill-skin-action'
                            height="40"
                            width="40"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 418.31 374.97">
                            <path d="M409.69,150.48,227.56,334.07,263,369.54l34.61-36c-12.05-15.38-12.06-15.39,1.94-29.8,5.55-5.72,11.35-11.21,16.78-17,6.75-7.24,13.31-7.66,20.49-.57,12.81,12.67,25.77,25.18,38.74,37.69,6.32,6.11,6.58,12.2.34,18.43q-52.12,52-104.22,104c-6.25,6.26-11.77,6.63-18.21.19q-53-53-106.18-105.63c-5.52-5.49-5.52-10.67.09-16.22Q227,245.86,306.48,167c27.38-27.19,54.84-54.31,81.78-81.93,4.93-5,9.76-7.25,16.4-7.18,17.62.18,35.25.35,52.87.17,9.24-.1,12.52,4.2,12.51,13.09q-.18,152.3.11,304.6c0,6.3-3,10.23-6.83,14.05-11.49,11.62-23.2,23-34.76,34.58-3.62,3.61-7.15,7.68-12.93,5.66-6.65-2.34-5.91-8.23-5.91-13.74q0-136.56,0-273.13Z"
                                transform="translate(-51.84 -76.19)" />
                            <path d="M112.05,263.81c0,43.22-.16,86.44-.06,129.66a20.33,20.33,0,0,1-6.53,15.62c-12.3,12-24.41,24.21-36.49,36.43-3.39,3.43-6.9,6.47-12,4.79-5.81-1.89-4.9-7-4.9-11.57Q52,265,51.84,91.28c0-10,4.07-13.83,13.43-13.49,2.09.08,4.19.09,6.29.14,18.43.5,38.87-5.47,54.76,2.22,15.72,7.61,27.07,24.39,40.14,37.36,20.54,20.37,40.73,41.1,61.45,61.29,8.16,7.95,8.68,14.6-.34,22.52a175,175,0,0,0-19.93,20.08c-8.09,9.84-14.63,8.92-22.66.73-21.73-22.14-44-43.77-65.88-65.76-2.88-2.89-3.23-2.3-7-8.67C112.05,186.93,112.07,224.58,112.05,263.81Z"
                                transform="translate(-51.84 -76.19)" /></svg>
                    </a>
                    <div className="flex items-center space-x-6 mr-6">
                        {/* Theme */}
                        <button onClick={changeTheme} type="button" className="inline-flex items-center justify-center p-2 w-10 h-11 text-sm rounded-lg hover:bg-skin-primary focus:outline-none">
                            <GiPaintRoller
                                className='text-3xl text-skin-secondary'
                                data-aos="fade-right"
                                data-aos-delay="200"
                            />
                        </button>
                        <button
                            onClick={onChangeMode} type="button" className="inline-flex items-center justify-center p-2 w-10 h-11 text-sm rounded-lg hover:bg-skin-primary focus:outline-none"
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            {!isDark
                                // Moon
                                ? <FaMoon className='text-3xl fill-skin-secondary' />
                                // Sun
                                : <FaSun className='text-3xl fill-skin-secondary' />
                            }
                        </button>
                        <button
                            onClick={onVolumeModeChange}
                            type="button"
                            className="inline-flex items-center justify-center p-2 w-10 h-10 rounded-lg hover:bg-skin-primary focus:outline-none"
                            data-aos="fade-right"
                            data-aos-delay="400"
                        >
                            {!isMute
                                // Volumte Icon
                                ? <svg className='fill-skin-secondary' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" version="1.1">
                                    <path d="M 24 6 L 12 18 L 4 18 L 4 30 L 12 30 L 24 42 Z M 28 6.1875 L 28 10.1875 C 34.375 11.125 39.34375 16.28125 39.9375 22.6875 C 39.976563 23.117188 40 23.5625 40 24 C 40 31 34.796875 36.8125 28 37.8125 L 28 41.8125 C 37 40.8125 44 33.203125 44 24 C 44 14.796875 37 7.1875 28 6.1875 Z M 28 14.1875 L 28 18.375 C 30.398438 19.171875 32 21.398438 32 24 C 32 26.601563 30.398438 28.828125 28 29.625 L 28 33.8125 C 32.601563 32.8125 36 28.796875 36 24 C 36 19.203125 32.601563 15.1875 28 14.1875 Z " />
                                </svg>
                                // Mute Icon
                                : <svg className='fill-skin-secondary' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" viewBox="0 0 52 52" version="1.1">
                                    <path d="M 1.8125 -0.0625 C 1.726563 -0.046875 1.640625 -0.0234375 1.5625 0 C 0.8125 0.132813 0.210938 0.679688 0 1.40625 C -0.210938 2.140625 0.0078125 2.921875 0.5625 3.4375 L 48.5625 51.4375 C 49.359375 52.234375 50.640625 52.234375 51.4375 51.4375 C 52.234375 50.640625 52.234375 49.359375 51.4375 48.5625 L 45.0625 42.1875 C 49.453125 38.132813 52.1875 32.421875 52.1875 26.1875 C 52.1875 17.789063 47.601563 10.421875 40 6.625 C 39 6.226563 37.773438 6.578125 37.375 7.375 C 36.773438 8.171875 37.203125 9.398438 38 10 C 44.203125 13 48 19.203125 48 26 C 48 31.234375 45.796875 35.921875 42.125 39.25 L 39.5625 36.625 C 42.203125 33.703125 43.8125 29.859375 43.8125 25.8125 C 43.8125 20.015625 40.578125 14.609375 35.375 11.8125 C 34.375 11.210938 33.226563 11.625 32.625 12.625 C 32.421875 13.625 32.828125 14.976563 33.625 15.375 C 37.625 17.578125 40 21.601563 40 26 C 40 29.039063 38.835938 31.867188 36.875 34 L 34.0625 31.1875 C 35.296875 29.804688 36 28.015625 36 26 C 36 22.398438 33.601563 19.1875 30 18.1875 C 29 17.984375 27.828125 18.625 27.625 19.625 C 27.421875 20.828125 28 21.789063 29 22.1875 C 30.796875 22.585938 32 24.203125 32 26 C 32 26.867188 31.742188 27.710938 31.25 28.375 L 26 23.125 L 26 6.625 C 26 4.023438 23.796875 3.390625 22 5.1875 L 14.9375 12.0625 L 3.4375 0.5625 C 3.023438 0.117188 2.421875 -0.109375 1.8125 -0.0625 Z M 9.375 17.625 L 8.8125 18 L 2 18 C 0.796875 18 0 18.796875 0 20 L 0 32 C 0 33.203125 0.796875 34 2 34 L 8.8125 34 L 21.8125 46.8125 C 23.8125 48.8125 25.8125 47.796875 25.8125 45 L 25.8125 34.1875 Z " />
                                </svg>
                            }
                        </button>
                        {/* Audio Control */}
                        <audio className='hidden' id='elAudio' controls>
                            <source src="/assets/NatureAndBackground.mp3" type="audio/mpeg" />
                        </audio>
                        {/* skin-action Menu */}
                        <button
                            onClick={toggleMenu}
                            data-collapse-toggle="navbar-hamburger"
                            type="button"
                            className="p-2 w-10 h-10 text-skin-secondary rounded-md focus:outline-none hover:bg-skin-primary"
                            aria-controls="navbar-hamburger"
                            aria-expanded="false"
                            data-aos="fade-right"
                            data-aos-delay="500"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav >
            <div
                className={`fixed w-full h-full backdrop-blur-3xl bg-skin-secondary/10 z-30 ${isMenuVisible ? 'show' : 'hide'}`}
                id="navbar-hamburger"
            >
                <div className="flex items-center justify-end">
                    <button onClick={toggleMenu} type="button" className='mr-6 p-4'>
                        <svg className='h-10 fill-skin-secondary hover:fill-skin-action' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 52" version="1.1">
                            <path d="M 43.46875 39.28125 L 39.273438 43.46875 C 38.507813 44.242188 37.257813 44.242188 36.484375 43.46875 L 26 32.992188 L 15.523438 43.46875 C 14.75 44.242188 13.492188 44.242188 12.726563 43.46875 L 8.53125 39.28125 C 7.757813 38.507813 7.757813 37.257813 8.53125 36.484375 L 19.007813 26 L 8.53125 15.523438 C 7.765625 14.742188 7.765625 13.484375 8.53125 12.726563 L 12.726563 8.53125 C 13.492188 7.757813 14.75 7.757813 15.523438 8.53125 L 26 19.015625 L 36.484375 8.53125 C 37.257813 7.757813 38.515625 7.757813 39.273438 8.53125 L 43.46875 12.71875 C 44.242188 13.492188 44.242188 14.75 43.476563 15.523438 L 32.992188 26 L 43.46875 36.484375 C 44.242188 37.257813 44.242188 38.507813 43.46875 39.28125 Z " />
                        </svg>
                    </button>
                </div>
                <ul className="h-full flex flex-col items-center font-semibold caudex-regular-italic justify-evenly text-7xl">
                    <li>
                        <a href="#"
                            onClick={navigateItem}
                            className="text-skin-secondary hover:text-skin-action"
                            aria-current="page"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className='text-skin-secondary hover:text-skin-action'
                            href='#about'
                            onClick={navigateItem}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={navigateItem} className="text-skin-secondary hover:text-skin-action">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={navigateItem} className="text-skin-secondary hover:text-skin-action">Projects</a>
                    </li>
                    <li className='mb-20'>
                        <a href="#contact" onClick={navigateItem} className="text-skin-secondary hover:text-skin-action mb-10">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
