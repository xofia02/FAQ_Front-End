import React from "react";
import CategoriaLayout from "../../../components/CategoriaLayout/CategoriaLayout"; 

const perguntas = [
  { pergunta: 'Como faço login no sistema?', resposta: 'Utilize seu e-mail corporativo e senha cadastrada.' },
  { pergunta: 'Como redefinir minha senha?', resposta: 'Clique em "Esqueci minha senha" na tela de login.' },
  { pergunta: 'O que fazer se o sistema travar?', resposta: 'Atualize a página ou reinicie o navegador.' },
  { pergunta: 'Compatibilidade com navegadores?', resposta: 'Recomendamos Google Chrome ou Microsoft Edge.' },
  { pergunta: 'Como atualizar o sistema?', resposta: 'Atualizações são automáticas; verifique a versão no rodapé.' },
  { pergunta: 'Como sair da conta?', resposta: 'Clique no seu nome no topo direito e selecione "Sair".' },
  { pergunta: 'Posso usar o sistema no celular?', resposta: 'Sim, o sistema é responsivo para dispositivos móveis.' },
  { pergunta: 'Como acessar relatórios?', resposta: 'No menu principal, selecione "Relatórios" para visualizar dados.' },
  { pergunta: 'Como alterar meus dados pessoais?', resposta: 'Acesse Perfil > Configurações para editar seus dados.' },
  { pergunta: 'Posso usar múltiplas contas no mesmo navegador?', resposta: 'Recomendamos usar sessões diferentes para evitar conflitos.' },
  { pergunta: 'Como recuperar arquivos apagados?', resposta: 'Entre em contato com o suporte para verificar backups disponíveis.' },
  { pergunta: 'O sistema possui suporte ao cliente?', resposta: 'Sim, suporte via chat e e-mail estão disponíveis durante o horário comercial.' },
  { pergunta: 'Como faço para instalar plugins?', resposta: 'Consulte o administrador para permissões e instalação de plugins.' },
  { pergunta: 'Há treinamento disponível para o sistema?', resposta: 'Sim, vídeos e manuais estão disponíveis na seção Ajuda.' },
  { pergunta: 'Posso personalizar a interface?', resposta: 'Sim, em Perfil > Preferências você pode ajustar temas e layout.' },
  { pergunta: 'Quais são os requisitos mínimos do sistema?', resposta: 'Conexão estável, navegador atualizado e sistema operacional compatível.' },
];

const Sistema = () => {
  return (
    <CategoriaLayout
      icone="🖥️"
      titulo="Sistema"
      cor="#4CAF50"
      perguntas={perguntas}
    />
  );
};

export default Sistema;