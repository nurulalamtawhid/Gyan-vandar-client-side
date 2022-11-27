import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
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
                        {/*
                            {isAdmin && <>}
                            
                            <li><Link to={'/dashboard/allusers'}>Allusers</Link></li>
                            <li><Link to={'/dashboard/adddoctor'}>ADD a Doctor</Link></li>
                            <li><Link to={'/dashboard/managedoctors'}>Doctor-Management</Link></li>
                            
                            </>
                            */
                        }
                    </ul>

                </div>
            </div>

            
        </div>
    );
};

export default DashBoardLayout;