import React, { useState } from "react";
import "./ModalComentario.css";

export default function ModalComentario({ isOpen, onClose, onSubmit }) {
  const [nome, setNome] = useState("");
  const [pergunta, setPergunta] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && pergunta) {
      onSubmit({ nome, pergunta, data: new Date() });
      setNome("");
      setPergunta("");
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Fazer Comentário</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <textarea
            placeholder="Sua pergunta"
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
            required
          ></textarea>
          <button type="submit">Enviar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}
