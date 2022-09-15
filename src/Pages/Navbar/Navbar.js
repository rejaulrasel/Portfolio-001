import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    
    <div className='navbar_2 '>
        <Link to='/home'>ℝ𝕖𝕛𝕒𝕦𝕝 ℍ𝕒𝕒𝕤𝕒𝕟</Link>
         <div className='ms-auto menu'>
         <Link to='/home'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/projects'>Projects</Link>
         <Link to='/blogs'>Blogs</Link>
         <Link to='/contact'>Contact</Link>
         </div>

         </div>
      <div id='ll'>

      <IconContext.Provider value={{ color: '#fff' }} >
        <div className='navbar'>
        
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
         
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>

      </div>
    </>
  );
}

export default Navbar;
