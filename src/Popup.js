import React from "react";

export default function Popup({ message, onClose }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <p>{message}</p>
        <button onClick={onClose}>Okay☁️ </button>
      </div>
    </div>
  );
}
