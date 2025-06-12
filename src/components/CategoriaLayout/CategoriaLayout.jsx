import "./CategoriaLayout.css";
import { Setavolta } from "../Setavolta";
import Comentario from "../Comentario/Comentario";
import Pergunta from "../Pergunta/Pergunta";
import { useNavigate } from "react-router-dom";
import ModalComentario from "../Comentario/ModalComentario.jsx";
import React, { useState, useEffect } from "react";

function CategoriaLayout({ titulo, icone, perguntas }) {
  const [modalAberto, setModalAberto] = useState(false);

  // Inicializa os comentários diretamente a partir do localStorage
  const [comentarios, setComentarios] = useState(() => {
    const salvos = localStorage.getItem(`comentarios-${titulo}`);
    if (salvos) {
      try {
        return JSON.parse(salvos).map((comentario) => ({
          ...comentario,
          data: new Date(comentario.data),
        }));
      } catch (e) {
        console.error("Erro ao carregar comentários:", e);
      }
    }
    return []; // sem comentário fixo
  });

  // Salvar no localStorage sempre que comentários mudarem
  useEffect(() => {
    localStorage.setItem(`comentarios-${titulo}`, JSON.stringify(comentarios));
  }, [comentarios, titulo]);

  const adicionarComentario = (novo) => {
    setComentarios([novo, ...comentarios]);
  };

  return (
    <div className="categoria-wrapper">
      {/* Fundo azul escuro no topo */}
      <div className="categoria-topo"></div>

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

      {/* Comentários */}
      <div className="categoria-div-comentario">
        <div className="comentarios-wrapper">
          {comentarios.map((c, i) => (
            <Comentario key={i} nome={c.nome} mensagem={c.pergunta} data={c.data} />
          ))}
        </div>
        <div className="botao-wrapper">
          <button onClick={() => setModalAberto(true)}>+</button>
        </div>
      </div>

      {/* Modal de comentário */}
      <ModalComentario
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        onSubmit={adicionarComentario}
      />
    </div>
  );
}

export default CategoriaLayout;
