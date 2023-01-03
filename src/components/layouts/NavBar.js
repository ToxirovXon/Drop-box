import React from 'react';
import { useAuth } from './../store/AuthStore';
import { useNavigate } from 'react-router-dom';
import logo from './dropbox_logo-removebg-preview.png'
import "./style.css";

const NavBar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/signin");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        
          <nav className="bg-blue-400 sm:px-4 py-2.5 dark:bg-blue-800 py-5">
            <div className='snow_wrap'>
             <div className='snow'>
             </div>
            </div>
            <div className="container flex flex-wrap justify-between items-center mx-auto rounded">
                <div onClick={() => navigate("/")} className="header_name">
                    My Dropbox
                </div>
                <div className='logo '>
                <img src={logo} className="" alt="..."/>
                
                </div>

                <div className="flex">
                    <div className="tugma">
                        <button onClick={() => navigate("/update-profile")} >Edit Profile</button>
                    </div>
                    <div className="tugma">
                        <button onClick={handleLogout} >Sign Out</button>
                    </div>
                    
                </div>
                
            </div>
          </nav>
        
        
    );
};

export default NavBar;
