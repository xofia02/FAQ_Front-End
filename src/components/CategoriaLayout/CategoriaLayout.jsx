import "./CategoriaLayout.css";
import { Setavolta } from "../Setavolta";
import Comentario from "../Comentario/Comentario";
import Pergunta from "../Pergunta/Pergunta";
import React from "react";

function CategoriaLayout({ titulo, icone, perguntas }) {
  return (
    <div className="categoria-wrapper">
      {/* Fundo azul escuro no topo */}
      <div className="categoria-topo">
        
      </div>
        
        <div className="seta-voltar-container">
          <Setavolta />
        </div>
      
      <div className="categoria-barra-info">
            <div className="categoria-icone">{icone}</div>
            <div className="categoria-nome">{titulo}</div>
            <div className="categoria-search-bar">
          <input type="text" placeholder="Pesquisar" />
          <button>Pesquisar</button>
        </div>
          
       
        </div>

{/* Conteúdo principal dentro da caixa clara */}
      <div className="categoria-container">
        <div className="categoria-faq-grid">
          {perguntas.map((p, i) => (
            <Pergunta
              key={i}
              pergunta={p.pergunta}
              resposta={p.resposta}
              className="categoria-faq-card"
            />
          ))}
        </div>

        
      </div>
      <div className="categoria-div-comentario">
      <Comentario /></div>
    </div>
  );
}

export default CategoriaLayout;
