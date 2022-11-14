import { GrFacebookOption, GrInstagram, GrYoutube } from 'react-icons/gr';
import logo from '../assets/besnik.png';


const Footer = ({ menu }) => {
    return (
        <footer className='pt-16 py-6'>
            <div className="container flex justify-between lg:px-10 md:justify-center">
                <div className='lg:hidden'>
                    <ul className='flex gap-20'>
                        {menu.map(({ title, url }) => (
                            <li key={title}>
                                <a
                                    className='text-secondaryText font-bold'
                                    href={url}>
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='-ml-28 lg:ml-0'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='md:hidden'>
                    <ul className='flex gap-10 items-center'>
                        <li><a className='text-secondaryText font-bold' href="#">Signup</a></li>
                        <li><a className='text-secondaryText font-bold' href="#">Login</a></li>
                        <li>
                            <div className='flex gap-7'>
                                <a href="#">
                                    <GrFacebookOption className='text-secondaryText font-bold' />
                                </a>
                                <a href="#">
                                    <GrInstagram className='text-secondaryText font-bold' />
                                </a>
                                <a href="#">
                                    <GrYoutube className='text-secondaryText font-bold' />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container">
                <div className="text-end mt-12 font-medium text-primaryText lg:text-center">
                    made by <a className='text-[blue] underline' href="#">AlphaDev Software</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;