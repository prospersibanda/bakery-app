import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { faHome, faBowlFood, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

const links = [
    {
        name: "Home",
        path:"/",
        icon: faHome
    },
    {
        name: "Menu",
        path:"/menu",
        icon: faBowlFood
    },
]
const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation();
    function closeSidebar(){
        setShowSidebar(false)
    }
  return (
        <>
            <div className='navbar container'>
                <Link to="/" className='logo'>Bakery<span>Dough</span>Hub</Link>
                <div className='nav-links'>
                    { links.map(link => (
                        <Link to={link.path} className={location.pathname === link.path ? "active" : "sidebar-link"} key={link.name}>{link.name}</Link>
                    )) }
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} links={links} /> }

        </>
  )
}

export default Navbar