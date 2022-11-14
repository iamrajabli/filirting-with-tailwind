import headerCard from '../../assets/header-card.png';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
    return <section id="hero" className='bg-primaryBg'>
        <div className="container">
            <div className="flex justify-between items-center lg:px-10 py-10">
                <div className='w-1/2 lg:w-full'>
                    <h1 className='text-7xl font-bold lg:text-4xl'>
                        Banking
                        <span className='border border-red-500 rounded-[80%] ml-2 sm:inline-block'>more</span>  smart
                    </h1>
                    <p className='text-secondaryText w-[280px] my-5'>
                        Meet the only spend management platform and corporate card.
                    </p>

                    <div className='flex items-center gap-5'>
                        <a href='#' className='bg-black w-12 h-12 flex items-center justify-center  shadow-primary'>
                            <BsArrowRight color='white' size={20} />
                        </a>
                        <a href='#' className='font-bold'>Get your card</a>
                    </div>
                </div>
                <div className='w-1/2 lg:hidden'>
                    <img src={headerCard} alt="header-card" />
                </div>
            </div>
        </div>
    </section>

};

export default Hero;