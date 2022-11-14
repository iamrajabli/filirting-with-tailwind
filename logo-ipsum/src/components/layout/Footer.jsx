import footer from '../../assets/footer.svg';

const Footer = ({ menu }) => {
    return (
        <footer className='bg-darkgray py-20 md:py-10'>
            <div className="container">
                <div className="flex gap-40 md:flex-col md:gap-10">
                    <div className='max-w-xs md:max-w-full'>
                        <a href="#">
                            <img src={footer} alt="logo" />
                        </a>

                        <p className='mt-[18px] text-white text-xl'>Sign up for our newsletter to get latest news from us</p>
                        <input type="text" placeholder='Enter your email' className='mt-3 bg-mediumgray flex w-full py-3 px-4 rounded-xl border-[1px] border-[#595959] text-white focus:outline-none focus:border-lightred placeholder:italic' />
                        <a href="#" className='btn sm:w-full'>Submit</a>
                    </div>
                    <div>
                        <div className='text-lightred text-lg font-medium'>Jump to</div>
                        <ul className='mt-2'>
                            {menu.map(({ name }) => (
                                <li className='mt-3' key={name}><a className='text-white text-xl font-medium md:text-base' href="#">{name}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;