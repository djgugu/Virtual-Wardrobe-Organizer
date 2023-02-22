import React from 'react';

const Popup = ({ item, handleClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <img className="popup-image" src={item.image} alt={item.name} />
        <h2 className="popup-name">{item.name}</h2>
        <p className="popup-category">{item.category}</p>
        <p className="popup-description">{item.description}</p>
      </div>
    </div>
  );
};

export default Popup;
