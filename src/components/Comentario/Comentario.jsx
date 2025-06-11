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
          <button className="botao-tag">Escolher Tag</button>
          <button className="botao-anexo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M16.5 8.25L10.31 14.44C9.04 15.71 7.02 15.71 5.75 14.44C4.48 13.17 4.48 11.15 5.75 9.88L12.69 2.94C13.81 1.82 15.59 1.82 16.71 2.94C17.83 4.06 17.83 5.84 16.71 6.96L9.75 13.9C9.34 14.31 8.66 14.31 8.25 13.9C7.84 13.49 7.84 12.81 8.25 12.4L14.44 6.21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comentario;
