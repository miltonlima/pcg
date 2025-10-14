import React, { useState, useEffect } from "react";
import "./Contato.css";
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
          Autodeclaração pcg inserida com sucesso
        </div>
      </div>
    </div>
  );
};

const Contato = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleShowModal = () => setShowModal(true);

  return (
    <div className="contato-container">
      <div className="contato-card">
        <img src={sescLogo} alt="logo" className="contato-logo" />
        {/* Remova o texto duplicado se quiser */}
        <button onClick={handleShowModal}>Enviar</button>
      </div>
      <SuccessModal open={showModal} onClose={closeModal} />
    </div>
  );
};

export default Contato;
