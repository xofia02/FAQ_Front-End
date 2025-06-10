import React from "react";
import { useNavigate } from "react-router-dom"; // 🚨 IMPORTANTE
import "./style.css";

export const Setavolta = ({ className }) => {
  const navigate = useNavigate(); // 👈 Hook para navegação

  return (
    <div
      className={`setavolta ${className}`}
      onClick={() => navigate('/')} // Vai para a Home
      style={{ cursor: 'pointer' }} // Mostrar que é clicável
    >
      <div className="polygon-wrapper">
        <img
          className="polygon"
          alt="Voltar"
          src="https://c.animaapp.com/PTejnPH4/img/polygon-1-1.svg"
        />
      </div>
    </div>
  );
};
