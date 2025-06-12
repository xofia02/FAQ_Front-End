import React from "react";
import "./Comentario.css";

function Comentario({ nome, mensagem, data }) {
  const dataFormatada = new Date(data).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className="comentario-container">
      <div className="comentario-balao">
        <div className="usuario">
          <div className="icone-usuario">
            {nome.charAt(0).toUpperCase()}
          </div>
          <div className="usuario-info">
            <strong>{nome}</strong>
            <span className="data-hora">{dataFormatada}</span>
          </div>
        </div>

        <div className="mensagem">
          {mensagem}
        </div>

        <div className="rodape-comentario">
          {/* Ícone ou espaço para ações futuras */}
        </div>
      </div>
    </div>
  );
}

export default Comentario;
