import React from 'react';
import './Configuracoes.css';
import { Setavolta } from "../../../components/Setavolta";


function Configuracoes() {
  return (
    <div className="configuracoes-page">
    <Setavolta /> {/* Componente de seta para voltar */}

      <h1>Configurações</h1>
      <p>Conteúdo e perguntas frequentes da categoria Configurações.</p>
    </div>
  );
}

export default Configuracoes;
