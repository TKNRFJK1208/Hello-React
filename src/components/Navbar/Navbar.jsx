import { Link } from 'react-router-dom';
import './Navbar.scss';

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













// for (var i = 0; i <= data.length-1; i++) {
//   if(data[i].id === parseInt(id)) {
//     console.log('1 more step')
//     return (
//       <div className="container" ref={modalRef} onClick={closeModal}>
//         <div className="modal">
//           <h2 id="dataId">{data.id}</h2>
//           <h3>{data.title}</h3>
//           <img src={data.img} alt="project detail" />
//           <button onClick={() => setShowModal(false)}>X</button>
//         </div>
//       </div>,
//       document.getElementById("portal")
//     )
//   } else{
//     return false;
//   }
// };

// {showModal ? openProject(): null}