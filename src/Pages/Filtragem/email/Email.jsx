import React from "react";
import CategoriaLayout from "../../../components/CategoriaLayout/CategoriaLayout"; 

const perguntas = [
  { pergunta: 'Como configurar o e-mail?', resposta: 'Use IMAP/SMTP ou acesse via webmail.' },
  { pergunta: 'Problemas com SPAM?', resposta: 'Verifique sua caixa de SPAM e adicione remetentes confiáveis.' },
  { pergunta: 'Como criar assinatura?', resposta: 'Configurações > Assinatura > Inserir HTML/texto.' },
  { pergunta: 'Limite de anexos?', resposta: 'Até 25MB por mensagem.' },
  { pergunta: 'Excluir mensagens antigas?', resposta: 'Use filtros e marque como “Excluir permanentemente”.' },
  { pergunta: 'Erro ao enviar e-mail?', resposta: 'Verifique se digitou o endereço corretamente.' },
  { pergunta: 'Como recuperar e-mail apagado?', resposta: 'Acesse a Lixeira e clique em "Restaurar".' },
  { pergunta: 'Como ativar resposta automática?', resposta: 'Configurações > Resposta automática > Ativar.' },
  { pergunta: 'Posso usar múltiplas contas?', resposta: 'Sim, adicione novas contas em "Contas vinculadas".' },
  { pergunta: 'Como pesquisar mensagens antigas?', resposta: 'Use a barra de busca com palavras-chave ou datas.' },
  { pergunta: 'Como marcar e-mails importantes?', resposta: 'Clique no ícone de estrela ao lado do e-mail.' },
  { pergunta: 'Arquivar ou excluir: qual a diferença?', resposta: 'Arquivar mantém o e-mail, excluir envia para a Lixeira.' },
  { pergunta: 'E-mails não chegam?', resposta: 'Verifique sua conexão, filtros e a pasta de SPAM.' },
  { pergunta: 'É possível usar o app de e-mail nativo?', resposta: 'Sim, configurando IMAP ou POP3.' },
  { pergunta: 'Posso agendar envio de e-mail?', resposta: 'Sim, clique na seta ao lado de "Enviar" e selecione "Agendar".' },
  { pergunta: 'Onde vejo e-mails enviados?', resposta: 'Na pasta "Enviados" no menu lateral.' },
];

const Email = () => {
  return (
    <CategoriaLayout
      icone="📧"
      titulo="Email"
      cor="#4CAF50"
      perguntas={perguntas}
    />
  );
};

export default Email;