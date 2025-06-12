import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Aplicativos from './Pages/Filtragem/Aplicativos/Aplicativos.jsx';
import Configuracoes from './Pages/Filtragem/Configuracoes/Configuracoes.jsx';
import Email from './Pages/Filtragem/email/email.jsx';
import Produtos from './Pages/Filtragem/produtos/Produtos.jsx';
import SegurancaPrivacidade from './Pages/Filtragem/seguranca/SegurancaPrivacidade.jsx';
import Sistema from './Pages/Filtragem/sistema/Sistema.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aplicativos" element={<Aplicativos />} />
       <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/email" element={<Email />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/seguranca-e-privacidade" element={<SegurancaPrivacidade />} />
        <Route path="/sistema" element={<Sistema />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
