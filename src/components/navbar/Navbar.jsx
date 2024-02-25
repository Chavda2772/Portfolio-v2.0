// import
import './Navbar.css'

function Navbar() {
    return (
        <nav className="flex items-center fixed w-full backdrop-blur-sm bg-white/45 dark:bg-black/45 justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </a>
            </div>
            <div className="flex lg:hidden">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Product</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Features</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Marketplace</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Company</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
    );
}

export default Navbar;
