import React from "react";
import "./Comentario.css";

function Comentario() {
  return (
    <div className="comentario-container">
      <div className="comentario-balao">
        <div className="usuario">
          <div className="icone-usuario">
            H
            <span className="status-verde"></span>
          </div>
          <div className="usuario-info">
            <strong>Cauã Maia</strong>
            <span className="data-hora">13/05, 17:24</span>
          </div>
        </div>

        <div className="mensagem">
          Como posso atualizar o driver?
        </div>

        <div className="rodape-comentario">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            </svg>
          
        </div>
      </div>
    </div>
  );
}

export default Comentario;
