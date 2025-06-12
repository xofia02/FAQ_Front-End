import "./CategoriaLayout.css";
import { Setavolta } from "../Setavolta";
import Comentario from "../Comentario/Comentario";
import Pergunta from "../Pergunta/Pergunta";
import { useNavigate } from "react-router-dom";
import ModalComentario from "../Comentario/ModalComentario.jsx";
import React, { useState, useEffect } from "react";

function CategoriaLayout({ titulo, icone, perguntas }) {
  const [modalAberto, setModalAberto] = useState(false);

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
    return [];
  });

  useEffect(() => {
    localStorage.setItem(`comentarios-${titulo}`, JSON.stringify(comentarios));
  }, [comentarios, titulo]);

  const adicionarComentario = (novo) => {
    setComentarios([novo, ...comentarios]);
  };

  // Estado para o valor do input da busca (controlado)
  const [inputBusca, setInputBusca] = useState("");

  // Estado para o termo que efetivamente será usado para destacar (atualiza só no click)
  const [termoBusca, setTermoBusca] = useState("");

  // Função para destacar termo na string
  function destacarTexto(texto, termo) {
    if (!termo) return texto;
    const partes = texto.split(new RegExp(`(${termo})`, "gi"));
    return partes.map((parte, i) =>
      parte.toLowerCase() === termo.toLowerCase() ? (
        <span key={i} className="destaque">
          {parte}
        </span>
      ) : (
        parte
      )
    );
  }

  return (
    <div className="categoria-wrapper">
      <div className="categoria-topo"></div>

      <div className="seta-voltar-container">
        <Setavolta />
      </div>

      <div className="categoria-barra-info">
        <div className="categoria-icone">{icone}</div>
        <div className="categoria-nome">{titulo}</div>
        <div className="categoria-search-bar">
          <input
            type="text"
            placeholder="Pesquisar"
            value={inputBusca}
            onChange={(e) => setInputBusca(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTermoBusca(inputBusca);
              }
            }}
          />
          <button
  onClick={() => {
    setTermoBusca(inputBusca);
      // tira o foco do input ativo
  }}
>
  Pesquisar
</button>

        </div>
      </div>

      <div className="categoria-container">
        <div className="categoria-faq-grid">
          {perguntas.map((p, i) => (
            <Pergunta
              key={i}
              perguntaDestacada={destacarTexto(p.pergunta, termoBusca)}
              respostaDestacada={destacarTexto(p.resposta, termoBusca)}
              className="categoria-faq-card"
            />
          ))}
        </div>
      </div>

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

      <ModalComentario
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        onSubmit={adicionarComentario}
      />
    </div>
  );
}

export default CategoriaLayout;
