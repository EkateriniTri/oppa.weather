import React from "react";
import "./Popup.css";

export default function Popup({ message, onClose }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <p>{message}</p>
        <button onClick={onClose}>I will oppa ❤️ ☁️ </button>
      </div>
    </div>
  );
}
