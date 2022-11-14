
const Hero = () => {
    return <section id="hero">
        <div className="container">
            <h1 className='pt-24 lg:pt-16 md:pt-12 sm:pt-10 font-black text-5xl lg:text-4xl md:text-3xl sm:text-2xl max-w-2xl md:max-w-full text-center mx-auto leading-snug'>
                Grow your business online.
                Get. More. Leads.
            </h1>
            <p className='text-xl md:text-lg sm:text-base tracking-tight text-center max-w-xl mx-auto mt-[18px] md:mt-4 sm:mt-2'>
                Wanna get serious into digital marketing? Then you need leads and this is where we can help you.
            </p>

            <div className='flex sm:flex-col justify-center gap-7'>

                <a
                    href="#"
                    className='btn sm:mt-4 tracking-tight'>
                    Start Here.
                </a>

                <a
                    href="#"
                    className='inline-block mt-6 sm:mt-4 py-[10px] px-8 rounded-2xl text-lightred text-xl  sm:text-base tracking-tight border-[2px] border-lightred sm:text-center'>
                    Learn More
                </a>

            </div>
        </div>
    </section>
};

export default Hero;