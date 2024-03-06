// import
import './About.css'

function About() {
    return (
        <div id='about' className="w-full h-dvh flex justify-center items-center bg-red-200 dark:bg-gray-800">
            {/* Image */}
            <div className='w-2/4 h-full flex justify-center items-end flex-col pr-12'>
                <img className='w-3/4' src="/images/portfolioImg@2x.png" alt="logo" />
            </div>
            {/* Description */}
            <div className='w-2/4 pl-12'>
                <div className='w-2/3 flex flex-col justify-center items-center pb-6'>
                    <span className='text-black dark:text-white'>I am Mahesh Chavda, holding a Bachelor of Technology (B.Tech) degree
                        from RK University, Rajkot, and currently employed as a Software Engineer at
                        Knovos India Pvt. Ltd. Based in India, I am dedicated to upgrading my skills
                        in .NET Core 8.0 and other emerging technologies.</span>
                </div>
                <button className='bg-red-500 p-8 pt-3 pb-3 rounded-md text-white hover:bg-red-400 active:scale-95'>Resume</button>
            </div>
        </div>
    );
}

export default About;
