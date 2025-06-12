import React from "react";
import CategoriaLayout from "../../../components/CategoriaLayout/CategoriaLayout"; 

const perguntas = [
  { pergunta: 'Como alterar o idioma?', resposta: 'Configurações > Idioma > Selecione o desejado.' },
  { pergunta: 'Como mudar a senha?', resposta: 'Perfil > Segurança > Alterar senha.' },
  { pergunta: 'Posso personalizar o tema?', resposta: 'Sim! Claro ou escuro em Configurações > Aparência.' },
  { pergunta: 'Notificações sonoras?', resposta: 'Ative ou desative em Preferências.' },
  { pergunta: 'Redefinir para padrão?', resposta: 'Botão "Restaurar configurações" no final da página.' },
  { pergunta: 'Salvar minhas preferências?', resposta: 'Alterações são salvas automaticamente.' },
  { pergunta: 'Posso mudar a fonte do texto?', resposta: 'Vá em Aparência > Tamanho da Fonte.' },
  { pergunta: 'Tem modo leitura?', resposta: 'Sim, ative em Aparência > Modo Leitura.' },
  { pergunta: 'Onde ajusto a privacidade?', resposta: 'Configurações > Privacidade.' },
  { pergunta: 'Como ativar autenticação em duas etapas?', resposta: 'Segurança > Verificação em duas etapas.' },
  { pergunta: 'Como desativar som de cliques?', resposta: 'Aparência > Sons > Desmarcar "Cliques".' },
  { pergunta: 'O app tem modo silencioso?', resposta: 'Sim, em Preferências > Modo Silencioso.' },
  { pergunta: 'Como personalizar atalhos?', resposta: 'Acesse Atalhos > Editar.' },
  { pergunta: 'É possível ocultar minha atividade?', resposta: 'Configurações > Privacidade > Ocultar atividade.' },
  { pergunta: 'Consigo resetar apenas uma seção?', resposta: 'Sim, há botão "Redefinir seção" em cada área.' },
  { pergunta: 'Como alterar o layout da tela inicial?', resposta: 'Configurações > Tela inicial > Layout.' },
];

const Configuracoes = () => {
  return (
    <CategoriaLayout
      icone="⚙️"
      titulo="Configurações"
      cor="#4CAF50"
      perguntas={perguntas}
    />
  );
};

export default Configuracoes;