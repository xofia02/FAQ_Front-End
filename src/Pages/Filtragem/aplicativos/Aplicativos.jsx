import React from "react";
import CategoriaLayout from "../../../components/CategoriaLayout/CategoriaLayout"; 

const perguntas = [
  { pergunta: 'Como instalar o aplicativo?', resposta: 'Disponível na Play Store e App Store.' },
  { pergunta: 'Posso usar offline?', resposta: 'Sim, mas com funcionalidades limitadas.' },
  { pergunta: 'Como ativar notificações?', resposta: 'Vá em Configurações > Notificações.' },
  { pergunta: 'Erros ao abrir?', resposta: 'Tente reinstalar ou limpar o cache do app.' },
  { pergunta: 'Atualizações automáticas?', resposta: 'Ative no seu celular: Ajustes > Atualizações.' },
  { pergunta: 'O app consome muitos dados?', resposta: 'Depende do uso, mas é otimizado para economia.' },
  { pergunta: 'É necessário criar uma conta?', resposta: 'Sim, para acessar todos os recursos.' },
  { pergunta: 'Posso mudar o idioma?', resposta: 'Sim, em Configurações > Idioma.' },
  { pergunta: 'Como redefinir minha senha?', resposta: 'Use a opção "Esqueci minha senha" na tela de login.' },
  { pergunta: 'O aplicativo é gratuito?', resposta: 'Sim, com opções premium disponíveis.' },
  { pergunta: 'Como excluir minha conta?', resposta: 'Entre em Configurações > Conta > Excluir conta.' },
  { pergunta: 'O app é compatível com tablets?', resposta: 'Sim, está otimizado para smartphones e tablets.' },
  { pergunta: 'Tem suporte técnico?', resposta: 'Sim, via chat no app ou e-mail de suporte.' },
  { pergunta: 'Como desativar notificações?', resposta: 'Vá nas configurações do sistema do seu celular.' },
  { pergunta: 'Funciona em iPhones antigos?', resposta: 'Sim, a partir do iOS 12.' },
  { pergunta: 'Como enviar sugestões?', resposta: 'Use o menu Ajuda > Enviar feedback.' },
];

const Aplicativos = () => {
  return (
    <CategoriaLayout
      icone="📱"
      titulo="Aplicativos"
      cor="#4CAF50"
      perguntas={perguntas}
    />
  );
};

export default Aplicativos;
