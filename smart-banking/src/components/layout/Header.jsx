import { BiMenu } from 'react-icons/bi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import logo from '../../assets/besnik.png';

const Header = ({ menu }) => {
    return (
        <header>
            <nav className='bg-primaryBg lg:px-10'>
                <div className="container">
                    <div className="flex justify-between items-center py-12">
                        <div>
                            <BiMenu size={30} className='hidden lg:block' />
                            <ul className='flex gap-20 lg:hidden'>
                                {menu.map(({ title, url }) => (
                                    <li key={title}>
                                        <a className='font-medium' href={url}>{title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='-ml-28 lg:ml-0'>
                            <a href="#">
                                <img src={logo} alt='besnik' />
                            </a>
                        </div>
                        <div className='w-10 h-10 rounded-[20px] border border-gray-300 flex justify-center items-center'>
                            <a href="#">
                                <HiOutlineShoppingBag />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;