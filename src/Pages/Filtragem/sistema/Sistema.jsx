import React from 'react';
import './Sistema.css';
import { Setavolta } from "../../../components/Setavolta";
function Sistema() {
  return (
    <div className="sistema-page">
    <Setavolta /> {/* Componente de seta para voltar */}
 
      <h1>Sistema</h1>
      <p>Conteúdo e perguntas frequentes da categoria Sistema.</p>
    </div>
  );
}

export default Sistema;
