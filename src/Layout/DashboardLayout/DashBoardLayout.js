import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';
import useAdmin from '../../Hook/useAdmin';
import useSeller from '../../Hook/useSeller';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">

                        <li><Link to={'/dashboard'}>Myorders</Link></li>



                        {isAdmin && <>
                            <li><Link to={'/dashboard/allusers'}>Allusers</Link></li>
                            <li><Link to={'/dashboard/allseller'}>AllSeller</Link></li>


                        </>
                        }
                        {
                            isSeller && <>
                            <li><Link to={'/dashboard/myproducts'}>Myproducts</Link></li>
                            <li><Link to={'/dashboard/addproducts'}>Addproducts</Link></li>
                            
                            
                            
                            </>
                        }
                        
                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashBoardLayout;