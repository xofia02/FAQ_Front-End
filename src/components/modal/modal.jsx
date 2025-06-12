import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

export default function Modal({ isOpen, setModalOpen }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleNavigate = (rota) => {
    setModalOpen();
    navigate(rota);
  };

  return (
    <div className="modal-background">
      <div className="modal-box">
        <h2>Escolha o Tipo da TAG</h2>

        <div className="option" onClick={() => handleNavigate('/sistema')}>
          <div className="icon-circle sistema">🖥️</div>
          <span>Sistema</span>
        </div>

        <div className="option" onClick={() => handleNavigate('/aplicativos')}>
          <div className="icon-circle aplicativos">📱</div>
          <span>Aplicativos</span>
        </div>

        <div className="option" onClick={() => handleNavigate('/seguranca-e-privacidade')}>
          <div className="icon-circle seguranca">🔒</div>
          <span>Segurança e Privacidade</span>
        </div>

        <div className="option" onClick={() => handleNavigate('/email')}>
          <div className="icon-circle email">📧</div>
          <span>Email</span>
        </div>

        <div className="option" onClick={() => handleNavigate('/produtos')}>
          <div className="icon-circle produtos">🛒</div>
          <span>Produtos</span>
        </div>

        <div className="option" onClick={() => handleNavigate('/configuracoes')}>
          <div className="icon-circle config">⚙️</div>
          <span>Configurações</span>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button className="filtragem" onClick={setModalOpen}>Fechar</button>
        </div>
      </div>
    </div>
  );
}
