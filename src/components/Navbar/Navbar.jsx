import { Link } from 'react-router-dom';
import './Navbar.scss';

import OpenInNewIcon from '@material-ui/icons/OpenInNew';

function Navbar({ menuOpen, setMenuOpen }) {

  return (
    <>
      <nav className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
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
                <Link to='/' className='nav-links'>Home</Link>
              </li>
              <li>
                <Link to='/about' className='nav-links'>About</Link>
              </li>
              <li>
                <Link to='/work' className='nav-links'>Work</Link>
              </li>
              <li>
                <Link to='/contact' className='nav-links'>Contact</Link>
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