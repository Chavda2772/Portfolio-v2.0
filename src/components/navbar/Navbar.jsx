import { useState, useEffect } from "react";
import './Navbar.css'

function Navbar() {
    const [isDark, setIsDark] = useState(false);
    const [isMute, setIsMute] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // Hooks
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            changeThemeMode('dark');
            setIsDark(true);
        }
    }, []);

    // Methods
    const onChangeMode = () => {
        changeThemeMode(isDark ? 'light' : 'dark');
    }

    const onVolumeModeChange = () => {
        setIsMute(!isMute);
    }
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    // Helper function
    const changeThemeMode = (theme) => {
        localStorage.theme = theme;
        setIsDark(theme === 'dark');

        if (theme === 'dark')
            document.documentElement.classList.add('dark');
        else
            document.documentElement.classList.remove('dark');
    }
    // Element
    return (
        <>
            <nav className="fixed w-full backdrop-blur-sm bg-white/40 dark:bg-gray-800 rounded-lg">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <button onClick={toggleMenu} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <a href="#" className="ml-14">
                        <img src="/images/logo.png" className="h-10" alt="Logo" />
                    </a>
                    <div className="flex items-center space-x-6">
                        <button onClick={onChangeMode} type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            {!isDark
                                // Moon
                                ? < svg className='fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" version="1.1">
                                    <path d="M 16 0 L 14.375 4.375 L 10 6 L 14.375 7.625 L 16 12 L 17.625 7.625 L 22 6 L 17.625 4.375 Z M 6 12 L 4.375 16.375 L 0 18 L 4.375 19.625 L 6 24 L 7.625 19.625 L 12 18 L 7.625 16.375 Z M 30 12 C 20.109375 12 12 20.109375 12 30 C 12 39.890625 20.109375 48 30 48 C 39.414063 48 47.101563 40.8125 48 31.625 L 48.25 28.6875 L 45.4375 29.5 C 44.15625 29.867188 43.210938 30 42 30 C 36.492188 30 32 25.507813 32 20 C 32 18.164063 32.515625 16.546875 33.375 15 L 35 12 Z M 29 16.1875 C 28.625 17.445313 28 18.609375 28 20 C 28 27.6875 34.3125 34 42 34 C 42.4375 34 42.835938 33.851563 43.25 33.8125 C 41.515625 39.664063 36.429688 44 30 44 C 22.289063 44 16 37.710938 16 30 C 16 22.640625 21.78125 16.726563 29 16.1875 Z " />
                                </svg>
                                // Sun
                                : <svg className='dark:fill-white' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="48pt" height="48pt" viewBox="0 0 48 48" version="1.1">
                                    <path d="M 23.75 0.375 C 22.742188 0.5 21.992188 1.359375 22 2.375 L 22 6.375 C 21.992188 7.09375 22.367188 7.765625 22.992188 8.132813 C 23.617188 8.492188 24.382813 8.492188 25.007813 8.132813 C 25.632813 7.765625 26.007813 7.09375 26 6.375 L 26 2.375 C 26.007813 1.796875 25.757813 1.25 25.328125 0.867188 C 24.898438 0.484375 24.320313 0.304688 23.75 0.375 Z M 8 6.75 C 7.25 6.882813 6.648438 7.429688 6.4375 8.15625 C 6.226563 8.890625 6.445313 9.671875 7 10.1875 L 9.8125 13 C 10.296875 13.59375 11.070313 13.867188 11.820313 13.695313 C 12.5625 13.523438 13.148438 12.9375 13.320313 12.195313 C 13.492188 11.445313 13.21875 10.671875 12.625 10.1875 L 9.8125 7.375 C 9.4375 6.976563 8.921875 6.757813 8.375 6.75 C 8.3125 6.75 8.25 6.75 8.1875 6.75 C 8.125 6.75 8.0625 6.75 8 6.75 Z M 39.375 6.75 C 38.921875 6.8125 38.5 7.039063 38.1875 7.375 L 35.375 10.1875 C 34.78125 10.671875 34.507813 11.445313 34.679688 12.195313 C 34.851563 12.9375 35.4375 13.523438 36.179688 13.695313 C 36.929688 13.867188 37.703125 13.59375 38.1875 13 L 41 10.1875 C 41.59375 9.617188 41.773438 8.734375 41.453125 7.976563 C 41.140625 7.21875 40.382813 6.734375 39.5625 6.75 C 39.5 6.75 39.4375 6.75 39.375 6.75 Z M 24 10.375 C 16.3125 10.375 10 16.6875 10 24.375 C 10 32.0625 16.3125 38.375 24 38.375 C 31.6875 38.375 38 32.0625 38 24.375 C 38 16.6875 31.6875 10.375 24 10.375 Z M 24 14.375 C 29.507813 14.375 34 18.867188 34 24.375 C 34 29.882813 29.507813 34.375 24 34.375 C 18.492188 34.375 14 29.882813 14 24.375 C 14 18.867188 18.492188 14.375 24 14.375 Z M 1.625 22.375 C 0.523438 22.476563 -0.289063 23.460938 -0.1875 24.5625 C -0.0859375 25.664063 0.898438 26.476563 2 26.375 L 6 26.375 C 6.71875 26.382813 7.390625 26.007813 7.757813 25.382813 C 8.117188 24.757813 8.117188 23.992188 7.757813 23.367188 C 7.390625 22.742188 6.71875 22.367188 6 22.375 L 2 22.375 C 1.9375 22.375 1.875 22.375 1.8125 22.375 C 1.75 22.375 1.6875 22.375 1.625 22.375 Z M 41.625 22.375 C 40.523438 22.476563 39.710938 23.460938 39.8125 24.5625 C 39.914063 25.664063 40.898438 26.476563 42 26.375 L 46 26.375 C 46.71875 26.382813 47.390625 26.007813 47.757813 25.382813 C 48.117188 24.757813 48.117188 23.992188 47.757813 23.367188 C 47.390625 22.742188 46.71875 22.367188 46 22.375 L 42 22.375 C 41.9375 22.375 41.875 22.375 41.8125 22.375 C 41.75 22.375 41.6875 22.375 41.625 22.375 Z M 10.9375 35.1875 C 10.5 35.265625 10.109375 35.484375 9.8125 35.8125 L 7 38.5625 C 6.203125 39.335938 6.195313 40.609375 6.96875 41.40625 C 7.742188 42.203125 9.015625 42.210938 9.8125 41.4375 L 12.625 38.625 C 13.273438 38.023438 13.445313 37.070313 13.054688 36.28125 C 12.671875 35.484375 11.804688 35.046875 10.9375 35.1875 Z M 36.375 35.1875 C 35.625 35.320313 35.023438 35.867188 34.8125 36.59375 C 34.601563 37.328125 34.820313 38.109375 35.375 38.625 L 38.1875 41.4375 C 38.984375 42.210938 40.257813 42.203125 41.03125 41.40625 C 41.804688 40.609375 41.796875 39.335938 41 38.5625 L 38.1875 35.8125 C 37.773438 35.367188 37.171875 35.140625 36.5625 35.1875 C 36.5 35.1875 36.4375 35.1875 36.375 35.1875 Z M 23.75 40.375 C 22.742188 40.5 21.992188 41.359375 22 42.375 L 22 46.375 C 21.992188 47.09375 22.367188 47.765625 22.992188 48.132813 C 23.617188 48.492188 24.382813 48.492188 25.007813 48.132813 C 25.632813 47.765625 26.007813 47.09375 26 46.375 L 26 42.375 C 26.007813 41.796875 25.757813 41.25 25.328125 40.867188 C 24.898438 40.484375 24.320313 40.304688 23.75 40.375 Z " />
                                </svg>
                            }
                        </button>
                        <button onClick={onVolumeModeChange} type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            {isMute
                                // Mute Icon
                                ? <svg className='fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" viewBox="0 0 52 52" version="1.1">
                                    <path d="M 1.8125 -0.0625 C 1.726563 -0.046875 1.640625 -0.0234375 1.5625 0 C 0.8125 0.132813 0.210938 0.679688 0 1.40625 C -0.210938 2.140625 0.0078125 2.921875 0.5625 3.4375 L 48.5625 51.4375 C 49.359375 52.234375 50.640625 52.234375 51.4375 51.4375 C 52.234375 50.640625 52.234375 49.359375 51.4375 48.5625 L 45.0625 42.1875 C 49.453125 38.132813 52.1875 32.421875 52.1875 26.1875 C 52.1875 17.789063 47.601563 10.421875 40 6.625 C 39 6.226563 37.773438 6.578125 37.375 7.375 C 36.773438 8.171875 37.203125 9.398438 38 10 C 44.203125 13 48 19.203125 48 26 C 48 31.234375 45.796875 35.921875 42.125 39.25 L 39.5625 36.625 C 42.203125 33.703125 43.8125 29.859375 43.8125 25.8125 C 43.8125 20.015625 40.578125 14.609375 35.375 11.8125 C 34.375 11.210938 33.226563 11.625 32.625 12.625 C 32.421875 13.625 32.828125 14.976563 33.625 15.375 C 37.625 17.578125 40 21.601563 40 26 C 40 29.039063 38.835938 31.867188 36.875 34 L 34.0625 31.1875 C 35.296875 29.804688 36 28.015625 36 26 C 36 22.398438 33.601563 19.1875 30 18.1875 C 29 17.984375 27.828125 18.625 27.625 19.625 C 27.421875 20.828125 28 21.789063 29 22.1875 C 30.796875 22.585938 32 24.203125 32 26 C 32 26.867188 31.742188 27.710938 31.25 28.375 L 26 23.125 L 26 6.625 C 26 4.023438 23.796875 3.390625 22 5.1875 L 14.9375 12.0625 L 3.4375 0.5625 C 3.023438 0.117188 2.421875 -0.109375 1.8125 -0.0625 Z M 9.375 17.625 L 8.8125 18 L 2 18 C 0.796875 18 0 18.796875 0 20 L 0 32 C 0 33.203125 0.796875 34 2 34 L 8.8125 34 L 21.8125 46.8125 C 23.8125 48.8125 25.8125 47.796875 25.8125 45 L 25.8125 34.1875 Z " />
                                </svg>
                                // Volumte Icon
                                : <svg className='fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" version="1.1">
                                    <path d="M 24 6 L 12 18 L 4 18 L 4 30 L 12 30 L 24 42 Z M 28 6.1875 L 28 10.1875 C 34.375 11.125 39.34375 16.28125 39.9375 22.6875 C 39.976563 23.117188 40 23.5625 40 24 C 40 31 34.796875 36.8125 28 37.8125 L 28 41.8125 C 37 40.8125 44 33.203125 44 24 C 44 14.796875 37 7.1875 28 6.1875 Z M 28 14.1875 L 28 18.375 C 30.398438 19.171875 32 21.398438 32 24 C 32 26.601563 30.398438 28.828125 28 29.625 L 28 33.8125 C 32.601563 32.8125 36 28.796875 36 24 C 36 19.203125 32.601563 15.1875 28 14.1875 Z " />
                                </svg>
                            }
                        </button>
                    </div>
                </div>
            </nav >
            <div className={`fixed w-1/3 h-full backdrop-blur-sm ${isMenuVisible ? '' : 'hidden'}`} id="navbar-hamburger">
                <div className="inline-flex items-center w-full justify-end h-12">
                    <button onClick={toggleMenu} type="button" className='p-5 mt-2'>
                        <svg className='h-10' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 52" version="1.1">
                            <path d="M 43.46875 39.28125 L 39.273438 43.46875 C 38.507813 44.242188 37.257813 44.242188 36.484375 43.46875 L 26 32.992188 L 15.523438 43.46875 C 14.75 44.242188 13.492188 44.242188 12.726563 43.46875 L 8.53125 39.28125 C 7.757813 38.507813 7.757813 37.257813 8.53125 36.484375 L 19.007813 26 L 8.53125 15.523438 C 7.765625 14.742188 7.765625 13.484375 8.53125 12.726563 L 12.726563 8.53125 C 13.492188 7.757813 14.75 7.757813 15.523438 8.53125 L 26 19.015625 L 36.484375 8.53125 C 37.257813 7.757813 38.515625 7.757813 39.273438 8.53125 L 43.46875 12.71875 C 44.242188 13.492188 44.242188 14.75 43.476563 15.523438 L 32.992188 26 L 43.46875 36.484375 C 44.242188 37.257813 44.242188 38.507813 43.46875 39.28125 Z " />
                        </svg>
                    </button>
                </div>
                <ul className="flex h-full flex-col font-medium justify-evenly rounded-lg bg-gray-50/30 ">
                    <li>
                        <a href="#" className="block px-3 text-2xl rounded" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block px-3 text-2xl text-gray-900">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block px-3 text-2xl text-gray-900">Pricing</a>
                    </li>
                    <li>
                        <a href="#" className="block px-3 text-2xl text-gray-900">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
