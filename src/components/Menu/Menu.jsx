import { Link } from 'react-router-dom';
import "./Menu.scss";

function Menu ({ menuOpen, setMenuOpen }){
  return(
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li className='nav-item' onClick={()=>setMenuOpen(false)}>
          <Link to='/' className='nav-links'>Home</Link>
        </li>
        <li className='nav-item' onClick={()=>setMenuOpen(false)}>
          <Link to='/work' className='nav-links'>Work</Link>
        </li>
        <li className='nav-item' onClick={()=>setMenuOpen(false)}>
          <Link to='/about' className='nav-links'>About</Link>
        </li>
        <li className='nav-item' onClick={()=>setMenuOpen(false)}>
          <Link to='/contact' className='nav-links'>Contact</Link>
        </li>
        <li>
          <a href='https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:4c711f9d-8e60-41a6-a464-90ce4919bf50' className='resume-link' target="_blank" rel="noreferrer">Download Resume</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;







