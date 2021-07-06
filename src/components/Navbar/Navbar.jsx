import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <>
      <nav className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <Link to='/' className="logo">
              <img src="images/logo.png" alt="" />
            </Link>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;