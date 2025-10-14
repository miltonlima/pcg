import React, { useRef, useState, useEffect } from "react";
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
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setNome("");
    setCpf("");
    setTelefone("");
    setFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const closeModal = () => setShowModal(false);

  const canSubmit = fileName && nome.trim() && cpf.trim() && telefone.trim();

  return (
    <div className="contato-container">
      <div className="contato-card">
        <img src={sescLogo} alt="logo" className="contato-logo" />
        <div className="modal-success-text">
          Autodeclaração PCG inserida com sucesso
        </div>
        
      </div>

      <SuccessModal open={showModal} onClose={closeModal} />
    </div>
  );
};

export default Contato;
