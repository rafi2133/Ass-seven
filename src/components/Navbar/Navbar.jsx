import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { RiHome2Line } from 'react-icons/ri';
import { IoTimeOutline } from 'react-icons/io5';
import { BsGraphUp } from 'react-icons/bs';


const Navbar = () => {
    const navLinks = <>
        <li>
            <NavLink
                className={({ isActive }) => isActive ? "!bg-[#244D3F] !text-white  rounded-md px-3 py-2 " : "px-3 py-2 hover:bg-gray-100 "}
                to={'/'}
                end
            >
                <RiHome2Line />Home
            </NavLink>
        </li>
        <li>
            <NavLink
                className={({ isActive }) => isActive ? "!text-white !bg-[#244D3F] rounded-md px-3 py-2" : "px-3 py-2 hover:bg-gray-100"}
                to={'/timeline'}
            >
                <IoTimeOutline />Timeline
            </NavLink>
        </li>
        <li>
            <NavLink
                className={({ isActive }) => isActive ? "!text-white !bg-[#244D3F] rounded-md px-3 py-2" : "px-3 py-2 hover:bg-gray-100"}
                to={'/status'}
            >
                <BsGraphUp />Status
            </NavLink>
        </li>
    </>


    return (
        <div className="navbar bg-base-100 shadow-sm justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link href='/' className=" text-3xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navLinks}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;