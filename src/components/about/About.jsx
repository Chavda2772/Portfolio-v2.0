// import
import './About.css'

function About() {
    return (
        <div id='about' className='relative h-full w-full bg-skin-primary lg:overflow-hidden'>
            <div className="absolute h-full w-full flex justify-center items-center opacity-5 overflow-hidden">
                <label className='text-[28rem] tracking-widest italic w-full font-ducados uppercase pt-20 text-skin-secondary scroll-animation'>About</label>
            </div>
            <div className="h-full bg-skin-secondary w-1 ml-16 sm:ml-8 absolute"></div>
            <a href='#about' className='sticky pb-10 italic sm:absolute sm:-left-8 top-20 w-max h-0 text-skin-secondary before:inline-flex flex before:w-5 before:h-5 before:mr-6 before:mt-2 before:bg-skin-secondary before:rounded-full pl-16 p-3 text-3xl font-bold -ml-2 cursor-pointer z-[12] hover:text-skin-action'>
                About
            </a>
            <div className="h-dvh w flex justify-center items-center relative z-10 md:flex-col">
                <div className='w-2/4 md:w-full h-full md:h-1/2 flex justify-center sm:justify-end items-end flex-col pr-12 md:pr-0 md:mt-20 md:ml-16'>
                    <img className='w-3/4 md:w-full' src="/images/portfolioImg@2x.png" alt="logo" data-aos="fade-right" />
                </div>

                {/* Image in div backup*/}
                {/* <div className='w-2/6 md:w-full h-3/4 m-10 md:h-1/2 pr-12 professional-photo md:pr-0 md:mt-20 md:pl-16'></div> */}

                {/* Description */}
                <div className='w-2/4 md:w-full flex justify-start flex-col md:h-1/2 sm:mt-2 pl-12 md:pr-8 md:pl-24'>
                    <div className='w-2/3 md:w-full flex flex-col justify-center items-center pb-6' data-aos="fade-right" data-aos-delay="200">
                        <span className='text-skin-secondary text-lg sm:font-semibold'>I am Mahesh Chavda, holding a Bachelor of Technology (B.Tech) degree
                            from RK University, India, and currently employed as a senior software engineer at
                            Knovos India Pvt. Ltd. Based in India, I am dedicated to upgrading my skills
                            in JavaScript frameworks, .NET Core 8.0 and other emerging technologies.</span>
                    </div>
                    <a className='delay-200' href='/assets/resume.pdf' target='_blank'>
                        <button href="#about" className="btn p-10 pt-3 pb-3 md:w-full md:mt-12" data-aos="fade-right" data-aos-delay="300">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
