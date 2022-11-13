import logo from './assets/logo.svg';

import { useState } from 'react';

import { BiMenu } from 'react-icons/bi';

const Header = ({ menu }) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <header className='relative'>
            <div className="container">
                <nav className='flex justify-between items-center pt-[26px]'>
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>

                    <ul className='flex gap-12 md:hidden'>
                        {menu.map(({ name }) => (
                            <li key={name}>
                                <a
                                    href="#"
                                    className='font-medium text-xl text-lightblack hover:text-darkred transition-colors lg:text-base'>{name}
                                </a>
                            </li>
                        ))}
                    </ul>


                    {/* Hamburger Menu */}
                    {
                        isOpen ? (
                            <ul className='hidden absolute md:flex flex-col top-24 left-6 right-6 items-center bg-lightred'>
                                {menu.map(({ name }) => (
                                    <li key={name}>
                                        <a
                                            href="#"
                                            className='block py-4 text-white'>{name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : null
                    }

                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="hidden md:block">
                        <BiMenu size={25} />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;