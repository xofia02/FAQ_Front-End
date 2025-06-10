import React from 'react';
import './Seguranca.css';
import { Setavolta } from "../../../components/Setavolta";

function Seguranca() {
  return (
    <div className="seguranca-page">
    <Setavolta /> {/* Componente de seta para voltar */}

      <h1>Segurança e Privacidade</h1>
      <p>Conteúdo da categoria Segurança.</p>
    </div>
  );
}

export default Seguranca;
