import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FaWindowClose } from "react-icons/fa";

function Modal({ onClose, DeleteCard, id }) {

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modalBox">
        <FaWindowClose className="closeModal" size={30} onClick={onClose} />
        <p>آیا از پاک کردن این مخاطب اطمینان دارید؟</p>
        <span>{id}</span>
        <div>
          <button className="ModalBtn yesBtn" onClick={() => DeleteCard(id)}>
            بله
          </button>
          <button className="ModalBtn noBtn" onClick={onClose}>
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
