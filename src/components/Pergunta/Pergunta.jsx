import React, { useState } from "react";
import "./Pergunta.css";

function Pergunta({ pergunta, resposta }) {
  const [aberta, setAberta] = useState(false);

  return (
    <div className={`pergunta ${aberta ? "aberta" : ""}`} onClick={() => setAberta(!aberta)}>
      <div className="pergunta-titulo">
        <strong>{pergunta}</strong>
        <span className="seta">{aberta ? "▲" : "▼"}</span>
      </div>
      {aberta && <div className="pergunta-resposta">{resposta}</div>}
    </div>
  );
}

export default Pergunta;
