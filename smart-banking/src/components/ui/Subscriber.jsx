import visa from '../../assets/visa.png';

const Subscriber = () => {
    return <section id="subscribe" className='bg-thirdBg h-[520px] lg:max-w-[520px]'>
        <div className="container flex justify-between items-center lg:h-full lg:p-10">
            <div className='w-1/2 -mt-24 lg:w-full lg:mt-0 '>
                <h1 className='text-6xl font-semibold lg:text-4xl md:text-2xl'>Subscribe our newsletter</h1>
                <a href="#" className='inline-block text-white py-4 px-12 mt-8 bg-[#E15C19]'>
                    Subscribe
                </a>
            </div>
            <div className='w-1/2 -mt-20 lg:hidden'>
                <img src={visa} alt="visa" />
            </div>
        </div>
    </section>
};

export default Subscriber;