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
      </ul>
    </div>
  );
}

export default Menu;