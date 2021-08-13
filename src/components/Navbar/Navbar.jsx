import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import { NavLink } from 'react-router-dom';

function Navbar({ menuOpen, setMenuOpen }) {

  const [wrapper, setWrapper] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY)
    if(window.scrollY >= 10) {
      setWrapper(true)
    } else {
      setWrapper(false)
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className={"topbar " + (menuOpen && "active")}>
        <div className={wrapper ? 'wrapper active' : 'wrapper'}>
          <div className="left">
            <Link to='/' className="logo">
              <img src="images/navbar/logo.png" alt="" />
            </Link>
          </div>
          <div className="right nav-list">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
            <ul>
              <li>
                <NavLink exact to='/' className='nav-links'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/about' className='nav-links' activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink to='/work' className='nav-links' activeClassName="active">Work</NavLink>
              </li>
              <li>
                <NavLink to='/contact' className='nav-links' activeClassName="active">Contact</NavLink>
              </li>
              <li>
                <a href='https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:4c711f9d-8e60-41a6-a464-90ce4919bf50' className='nav-links' target="_blank" rel="noreferrer">Resume</a>
                <OpenInNewIcon className="icon" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;