import React from 'react';
import './Produtos.css';
import { Setavolta } from "../../../components/Setavolta";

function Produtos() {
  return (
    <div className="produtos-page">
    <Setavolta /> {/* Componente de seta para voltar */}

      <h1>Produtos</h1>
      <p>Conteúdo e perguntas frequentes da categoria Produtos.</p>
    </div>
  );
}

export default Produtos;
