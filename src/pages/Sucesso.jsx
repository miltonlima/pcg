import React, { useEffect } from "react";
import "./Sucesso.css";
import sescLogo from "../assets/sesc-logo.png";

const SuccessModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      onClose();
    }, 2500);
    return () => clearTimeout(t);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="modal-success-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-success-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-success-text">
          Autodeclaração pcg inserida com sucesso!
        </div>
      </div>
    </div>
  );
};

const Contato = () => {

  return (
    <div className="contato-container">
      <div className="contato-card">
        <img src={sescLogo} alt="logo" className="contato-logo" />
        <div className="modal-success-text">
          Autodeclaração pcg inserida com sucesso
        </div>
      </div>
    </div>
  );
};

export default Contato;
