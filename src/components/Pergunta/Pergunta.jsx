import React, { useState } from "react";
import "./Pergunta.css";

function Pergunta({ perguntaDestacada, respostaDestacada, className }) {
  const [aberta, setAberta] = useState(false);

  return (
    <div
      className={`${className} pergunta ${aberta ? "aberta" : ""}`}
      onClick={() => setAberta(!aberta)}
    >
      <div className="pergunta-titulo">
        <strong>{perguntaDestacada}</strong>
        <span className="seta">{aberta ? "▲" : "▼"}</span>
      </div>
      {aberta && <div className="pergunta-resposta">{respostaDestacada}</div>}
    </div>
  );
}

export default Pergunta;
