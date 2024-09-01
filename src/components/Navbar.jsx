import React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { faHome, faList, faCog} from '@fortawesome/free-solid-svg-icons';

const links = [
    {
        name: "Home",
        path:"/",
        icon: faHome
    },
    {
        name: "Scones",
        path:"/scones",
        icon: faList
    },
    {
        name: "Settings",
        path:"/settings",
        icon: faCog
    }
]
const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    function closeSidebar(){
        setShowSidebar(false)
    }
  return (
        <>
            <div className='navbar container'>
                <a href='#' className='logo'>Bakery<span>oo</span>Hub</a>
                <div className='nav-links'>
                    { links.map(link => (
                        <a href="#!" key={link.name}>{link.name}</a>
                    )) }
                    {/* <a href='#' className='active'>Home</a>
                    <a href='#'>Scones</a>
                    <a href='#'>Settings</a> */}
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