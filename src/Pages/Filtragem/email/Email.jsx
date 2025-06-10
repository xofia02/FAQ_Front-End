import React from 'react';
import './Email.css';
import { Setavolta } from "../../../components/Setavolta";

function Email() {
  return (
    <div className="email-page">
    <Setavolta /> {/* Componente de seta para voltar */}

      <h1>Email</h1>
      <p>Conteúdo e perguntas frequentes da categoria Email.</p>
    </div>
  );
}

export default Email;
