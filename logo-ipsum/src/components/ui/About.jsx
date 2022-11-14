import about from '../../assets/about.jpg';

const About = () => {
    return <section id="about">
        <div className="container">
            <div className="flex justify-between mt-40 pb-32 lg:flex-col lg:mt-32 lg:pb-24">

                <div className="flex flex-col w-1/2 lg:w-full">
                    <div className='text-darkred font-bold text-xl tracking-tight'>about us</div>
                    <h2 className='mt-[2px] text-4xl font-black lg:text-3xl sm:text-2xl'>The team behind the brand.</h2>
                    <p className='mt-3 max-w-sm text-lg lg:max-w-full sm:text-base'>Proin elementum fermentum auctor. Nulla semper, est eget congue pellentesque, erat nulla molestie mi, in finibus leo nisl ac lectus. Praesent non urna. Nulla congue porta lectus in laoreet. Aenean pellentesque vitae metus id porttitor.t</p>

                    <a href="#" className='btn max-w-fit sm:max-w-full'>Learn More</a>
                </div>

                <div className="flex flex-col w-[450px] lg:w-full lg:mt-6">
                    <img src={about} alt="about" className='w-full' />
                </div>

            </div>
        </div>
    </section>
};

export default About;