import logo from '../../assets/Resources/Logo.png'
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
    return (
        <nav className='py-5'>
            <div>
                <img className='w-1/2 md:w-1/6' src={logo} alt="" />
            </div>
            <div className='md:hidden'>
                <AiOutlineMenuUnfold className='text-3xl' />
                <ImCross className='text-3xl' />
            </div>
            <ul>
                <li>Home</li>
                <li>Donation</li>
                <li>Statistics</li>
            </ul>
        </nav>
    )
}

export default Navbar