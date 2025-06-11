import React from "react";
import CategoriaLayout from "../../../components/CategoriaLayout/CategoriaLayout"; 

const perguntas = [
  { pergunta: 'Como ativar autenticação 2FA?', resposta: 'Acesse Perfil > Segurança e ative o 2FA.' },
  { pergunta: 'Meus dados são compartilhados?', resposta: 'Não. Seus dados são protegidos e confidenciais.' },
  { pergunta: 'Política de privacidade?', resposta: 'Leia em nosso site na seção "Privacidade".' },
  { pergunta: 'Como revogar acessos?', resposta: 'Vá em Configurações > Dispositivos e encerre sessões.' },
  { pergunta: 'Como criptografamos os dados?', resposta: 'Usamos criptografia AES-256 para todos os dados.' },
  { pergunta: 'Relatar vazamento de dados?', resposta: 'Contate suporte@empresa.com imediatamente.' },
  { pergunta: 'O que é autenticação multifator?', resposta: 'É a combinação de duas ou mais formas de verificação para acesso.' },
  { pergunta: 'Como redefinir minha senha?', resposta: 'Clique em "Esqueci a senha" na tela de login e siga as instruções.' },
  { pergunta: 'Como proteger minha conta contra hackers?', resposta: 'Use senhas fortes e ative a autenticação 2FA.' },
  { pergunta: 'Quais dados pessoais coletamos?', resposta: 'Coletamos nome, e-mail, telefone e dados de uso para melhorar o serviço.' },
  { pergunta: 'Como posso excluir minha conta?', resposta: 'Envie uma solicitação pelo nosso suporte para exclusão definitiva.' },
  { pergunta: 'Vocês armazenam meus dados por quanto tempo?', resposta: 'Armazenamos enquanto sua conta estiver ativa ou conforme a lei exigir.' },
  { pergunta: 'É seguro usar meu dispositivo público para acessar?', resposta: 'Recomendamos evitar e sempre sair da conta após o uso.' },
  { pergunta: 'Como saber se minha conta foi comprometida?', resposta: 'Alertas de atividade suspeita serão enviados ao seu e-mail.' },
  { pergunta: 'Posso acessar minha conta de vários dispositivos?', resposta: 'Sim, mas gerencie dispositivos autorizados em Configurações.' },
  { pergunta: 'Como faço backup dos meus dados?', resposta: 'Use as opções de exportação disponíveis em Perfil > Dados.' },
];

const SegurancaPrivacidade = () => {
  return (
    <CategoriaLayout
      icone="🔒"
      titulo="Segurança e Privacidade"
      cor="#4CAF50"
      perguntas={perguntas}
    />
  );
};

export default SegurancaPrivacidade;