import React from 'react';
import "./NotFoundPage.scss";
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import Footer from '../Footer/Footer';

export default function NotFoundPage() {
  return (
    <>
      <div className="error" id="404">
        <h1>SORRY, PAGE NOT FOUND!</h1>
        <div className="error-box">
          <div className="error-img">
            <img src="images/404/404.jpg" className="pf-img" alt="profile" />
            <button>
              <Link  to="/">Go to Home </Link>
            </button>
          </div>
        </div>
      </div>
      <Icon />
      <Footer />
    </>
  );
}
