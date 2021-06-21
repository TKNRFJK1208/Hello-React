import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className="logoContainer">
            <img src="images/logo.png" className="logo" alt="" />
          </Link>
          <div className='menu-icon'>
          </div>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/work'
                className='nav-links'
              >
                Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
              >
                About
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;