import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, category, description, deployed, repo, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/small/${category}/${index}.jpg`)}
          alt="current category"
        />
        <p>{description}</p>
        <a href= {deployed}>Website </a>
        <a href= {repo}>GitHub </a>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;