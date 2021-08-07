import { useRef } from "react";
import ReactDom from "react-dom";
// import { db } from "../../firebase";
import "./ProjectDetail.scss";

function SetProjectDetail({ setShowModal, id, title, image }) {
  // close the modal when clicking outside the modal
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  // render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
          <h2>{id}</h2>
          <h3>{title}</h3>
          <img src={image} alt="project detail" />
          <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal"),
  );
};

export default SetProjectDetail;