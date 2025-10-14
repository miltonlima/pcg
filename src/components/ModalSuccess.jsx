import React from "react";
import "../pages/Contato.css";

export default function ModalSuccess({ open, onClose, message }) {
  if (!open) return null;
  return (
    <div className="modal-success-overlay" onClick={onClose}>
      <div className="modal-success-card" onClick={e => e.stopPropagation()}>
        <div className="modal-success-text">{message || "Autodeclaração PCG incluída com sucesso"}</div>
        <div className="modal-success-icon">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="28" fill="#42A5F5"/>
            <path d="M39 22L25.5 35L17 27" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
