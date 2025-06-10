import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';


function Pergunta({ pergunta, resposta }) {
  const [visivel, setVisivel] = useState(false);
  return (
    <li onClick={() => setVisivel(!visivel)} className="pergunta-item">
      📄 {pergunta} <span className="like">👍</span>
      {visivel && <p className="resposta">{resposta}</p>}
    </li>
  );
}

function Home() {
    const navigate = useNavigate();
  const categorias = [
    {
      nome: 'Sistema',
      cor: '#EBFDDD',
      icone: '🖥️',
      perguntas: [
        { pergunta: 'Como faço login no sistema?', resposta: 'Utilize seu e-mail corporativo e senha cadastrada.' },
        { pergunta: 'Como redefinir minha senha?', resposta: 'Clique em "Esqueci minha senha" na tela de login.' },
        { pergunta: 'O que fazer se o sistema travar?', resposta: 'Atualize a página ou reinicie o navegador.' },
        { pergunta: 'Compatibilidade com navegadores?', resposta: 'Recomendamos Google Chrome ou Microsoft Edge.' },
        { pergunta: 'Como atualizar o sistema?', resposta: 'Atualizações são automáticas; verifique a versão no rodapé.' },
        { pergunta: 'Como sair da conta?', resposta: 'Clique no seu nome no topo direito e selecione "Sair".' },
      ],
    },
    {
      nome: 'Aplicativos',
      cor: '#DDF4FD',
      icone: '📱',
      perguntas: [
        { pergunta: 'Como instalar o aplicativo?', resposta: 'Disponível na Play Store e App Store.' },
        { pergunta: 'Posso usar offline?', resposta: 'Sim, mas com funcionalidades limitadas.' },
        { pergunta: 'Como ativar notificações?', resposta: 'Vá em Configurações > Notificações.' },
        { pergunta: 'Erros ao abrir?', resposta: 'Tente reinstalar ou limpar o cache do app.' },
        { pergunta: 'Atualizações automáticas?', resposta: 'Ative no seu celular: Ajustes > Atualizações.' },
        { pergunta: 'O app consome muitos dados?', resposta: 'Depende do uso, mas é otimizado para economia.' },
      ],
    },
    {
      nome: 'Segurança e Privacidade',
      cor: '#FDE4F5',
      icone: '🔒',
      perguntas: [
        { pergunta: 'Como ativar autenticação 2FA?', resposta: 'Acesse Perfil > Segurança e ative o 2FA.' },
        { pergunta: 'Meus dados são compartilhados?', resposta: 'Não. Seus dados são protegidos e confidenciais.' },
        { pergunta: 'Política de privacidade?', resposta: 'Leia em nosso site na seção "Privacidade".' },
        { pergunta: 'Como revogar acessos?', resposta: 'Vá em Configurações > Dispositivos e encerre sessões.' },
        { pergunta: 'Como criptografamos os dados?', resposta: 'Usamos criptografia AES-256 para todos os dados.' },
        { pergunta: 'Relatar vazamento de dados?', resposta: 'Contate suporte@empresa.com imediatamente.' },
      ],
    },
    {
      nome: 'Email',
      cor: '#FFF3DD',
      icone: '📧',
      perguntas: [
        { pergunta: 'Como configurar o e-mail?', resposta: 'Use IMAP/SMTP ou acesse via webmail.' },
        { pergunta: 'Problemas com SPAM?', resposta: 'Verifique sua caixa de SPAM e adicione remetentes confiáveis.' },
        { pergunta: 'Como criar assinatura?', resposta: 'Configurações > Assinatura > Inserir HTML/texto.' },
        { pergunta: 'Limite de anexos?', resposta: 'Até 25MB por mensagem.' },
        { pergunta: 'Excluir mensagens antigas?', resposta: 'Use filtros e marque como “Excluir permanentemente”.' },
        { pergunta: 'Erro ao enviar e-mail?', resposta: 'Verifique se digitou o endereço corretamente.' },
      ],
    },
    {
      nome: 'Produtos',
      cor: '#E7FDE7',
      icone: '🛒',
      perguntas: [
        { pergunta: 'Como comprar um produto?', resposta: 'Acesse a loja e clique em "Adicionar ao carrinho".' },
        { pergunta: 'Posso parcelar?', resposta: 'Sim, em até 12x sem juros no cartão.' },
        { pergunta: 'Como rastrear meu pedido?', resposta: 'Após envio, você receberá um link de rastreio.' },
        { pergunta: 'Qual prazo de entrega?', resposta: 'De 3 a 7 dias úteis, dependendo da região.' },
        { pergunta: 'Posso trocar um produto?', resposta: 'Sim, em até 30 dias com nota fiscal.' },
        { pergunta: 'Tem garantia?', resposta: 'Todos os produtos têm garantia mínima de 1 ano.' },
      ],
    },
    {
      nome: 'Configurações',
      cor: '#F2E7FD',
      icone: '⚙️',
      perguntas: [
        { pergunta: 'Como alterar o idioma?', resposta: 'Configurações > Idioma > Selecione o desejado.' },
        { pergunta: 'Como mudar a senha?', resposta: 'Perfil > Segurança > Alterar senha.' },
        { pergunta: 'Posso personalizar o tema?', resposta: 'Sim! Claro ou escuro em Configurações > Aparência.' },
        { pergunta: 'Notificações sonoras?', resposta: 'Ative ou desative em Preferências.' },
        { pergunta: 'Redefinir para padrão?', resposta: 'Botão "Restaurar configurações" no final da página.' },
        { pergunta: 'Salvar minhas preferências?', resposta: 'Alterações são salvas automaticamente.' },
      ],
    },
  ];

  const slugify = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, '-');

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Suporte</h1>
          <p>
            Navegue por nossas perguntas frequentes, tutoriais e outros recursos de autoajuda
            para encontrar as respostas de que você precisa.
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar" />
            <button>Filtrar</button>
          </div>
          <div className="popular">
            <span>Popular: </span>
            <a href="#">Como conectar 2 monitores?</a>
            <a href="#">Como copiar e colar?</a>
          </div>
        </div>
      </section>

      <section className="faq-grid">
  {categorias.map((cat, index) => (
    <div className="faq-card" key={index} style={{ cursor: 'default' }}>
      <div
        className="faq-header"
        style={{ backgroundColor: cat.cor, cursor: 'pointer' }}
        onClick={() => navigate(`/${slugify(cat.nome)}`)}
      >
        <span className="icon">{cat.icone}</span>
        <strong>{cat.nome}</strong>
      </div>
      <ul>
        {cat.perguntas.map((p, i) => (
          <Pergunta key={i} pergunta={p.pergunta} resposta={p.resposta} />
        ))}
      </ul>
    </div>
  ))}
</section>

    </div>
  );
}

export default Home;
