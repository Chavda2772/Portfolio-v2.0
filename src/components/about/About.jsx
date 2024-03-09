// import
import './About.css'

function About() {
    return (
        <div id='about' className='relative w-full h-dvh bg-primary dark:bg-gray-800'>
            <p className='absolute top-20 before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 dark:text-white'>About</p>
            <div className="h-full bg-secondary w-1 ml-16 absolute"></div>
            <div className="h-dvh flex justify-center items-center ">
                {/* Image */}
                <div className='w-2/4 h-full flex justify-center items-end flex-col pr-12'>
                    <img className='w-3/4' src="/images/portfolioImg@2x.png" alt="logo" />
                </div>
                {/* Description */}
                <div className='w-2/4 pl-12'>
                    <div className='w-2/3 flex flex-col justify-center items-center pb-6'>
                        <span className='text-secondary dark:text-white font-semibold'>I am Mahesh Chavda, holding a Bachelor of Technology (B.Tech) degree
                            from RK University, Rajkot, and currently employed as a Software Engineer at
                            Knovos India Pvt. Ltd. Based in India, I am dedicated to upgrading my skills
                            in .NET Core 8.0 and other emerging technologies.</span>
                    </div>
                    <button className='bg-secondary p-8 pt-3 pb-3 rounded-md text-action hover:bg-secondary/80 active:scale-95'>Resume</button>
                </div>
            </div>
        </div>
    );
}

export default About;
