import "./Icon.scss";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

function Icon ({ menuOpen, setMenuOpen }){
  return(
    <div className="icons-container">
      <ul className="icon-menu">
        <li className="icon">
          <a href="https://www.linkedin.com/in/takanori-fujiki-575746195/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon" /></a>
        </li>
        <li className="icon">
          <a href="https://www.instagram.com/t8k81208/" target="_blank" rel="noreferrer"><InstagramIcon className="icon" /></a>
        </li>
        <li className="icon">
          <a href="https://github.com/TKNRFJK1208" target="_blank" rel="noreferrer"><GitHubIcon className="icon" /></a>
        </li>
      </ul>
    </div>
  );
}

export default Icon;