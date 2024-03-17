// import
import './About.css'

function About() {
    return (
        <div id='about' className='relative h-full w-full bg-skin-primary overflow-hidden'>
            <div className="absolute h-full w-full flex items-center opacity-5 overflow-hidden">
                <label className='text-[22rem] uppercase text-skin-secondary scroll-animation'>About</label>
            </div>
            <div className="h-full bg-skin-secondary w-1 ml-16 absolute"></div>
            <a href='#about' className='sticky top-20 w-max h-0 text-skin-secondary before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-skin-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 cursor-pointer z-[12] hover:text-skin-action'>
                About
            </a>
            <div className="h-dvh flex justify-center items-center relative z-10 md:flex-col">
                <div className='w-2/4 md:w-5/6 h-full md:h-1/2 flex justify-center items-end flex-col pr-12 md:pr-0 md:mt-20 md:ml-16 custom-hidden'>
                    <img className='w-3/4 md:w-full' src="/images/portfolioImg@2x.png" alt="logo" />
                </div>

                {/* Image in div backup*/}
                {/* <div className='w-2/6 md:w-full h-3/4 m-10 md:h-1/2 pr-12 professional-photo md:pr-0 md:mt-20 md:pl-16'></div> */}

                {/* Description */}
                <div className='w-2/4 md:w-full md:h-1/2 pl-12 md:pr-8 md:pl-24'>
                    <div className='w-2/3 md:w-full flex flex-col justify-center items-center pb-6 delay-300 custom-hidden'>
                        <span className='text-skin-secondary font-semibold'>I am Mahesh Chavda, holding a Bachelor of Technology (B.Tech) degree
                            from RK University, Rajkot, and currently employed as a Software Engineer at
                            Knovos India Pvt. Ltd. Based in India, I am dedicated to upgrading my skills
                            in .NET Core 8.0 and other emerging technologies.</span>
                    </div>
                    <a className='delay-200' href='/assets/resume.pdf' target='_blank'>
                        <button className='bg-skin-secondary p-8 pt-3 pb-3 rounded-md text-skin-primary hover:bg-skin-secondary/80 active:scale-95 md:w-full md:mt-12 custom-hidden'>Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
