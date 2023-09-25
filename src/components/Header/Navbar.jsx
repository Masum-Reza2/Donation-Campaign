import { useState } from 'react';
import logo from '../../assets/Resources/Logo.png'
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(true)
    const links = <>
        <NavLink to={'/'}>
            <li>Home</li>
        </NavLink>
        <NavLink to={'/donation'}>
            <li>Donation</li>
        </NavLink>
        <NavLink to={'/statistics'}>
            <li>Statistics</li>
        </NavLink>
    </>

    return (
        <div>
            {/* mobile */}
            <nav className='py-5 flex justify-between items-center md:hidden'>
                <div>
                    <img className='w-1/2' src={logo} alt="logo" />
                </div>
                <div>
                    {
                        toggleMenu ? <AiOutlineMenuUnfold className='text-3xl' onClick={() => setToggleMenu(!toggleMenu)} /> : <ImCross className='text-3xl' onClick={() => setToggleMenu(!toggleMenu)} />
                    }
                </div>

                <ul className={`absolute transition-all duration-1000 rounded-md  py-5 font-semibold border w-[90%] text-center shadow-md shadow-gray-500 bg-white flex flex-col gap-3 ${!toggleMenu ? 'top-20 ' : '-top-60'} `}>
                    {links}
                </ul>
            </nav>

            {/* larger device */}
            <nav className='hidden md:flex py-5  justify-between items-center '>
                <div>
                    <img className='w-[60%]' src={logo} alt="logo" />
                </div>

                <ul className='flex gap-10'>
                    {links}
                </ul>
            </nav>

        </div>
    )
}

export default Navbar