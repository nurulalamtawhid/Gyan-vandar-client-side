import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/Logo.png'
import { AuthContext } from '../../../Context/Authprovider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handlelogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const menuItems = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>BLOG</Link></li>

        {
            user?.uid ?
                <>
                    <li><Link to='/dashboard'>DashBoard</Link></li>
                    <li><button onClick={handlelogout}>SignOut</button></li>
                </>
                :
                <li><Link to='/login'>LogIn</Link></li>}


    </>
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className=" normal-case text-xl">
                        <img className='h-40' src={Logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>

        </div>
    );
};

export default Navbar;