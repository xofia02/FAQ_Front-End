import './Style.css';

function Home() {
  const categorias = [
    {
      nome: 'Sistema',
      cor: '#EBFDDD',
      icone: '🖥️',
      perguntas: ['Como abrir o sistema?', 'Como desinstalar?', 'Dúvidas', 'Dúvidas', 'Dúvidas'],
    },
    {
      nome: 'Aplicativos',
      cor: '#DDF4FD',
      icone: '📱',
      perguntas: ['Como abrir o aplicativo?', 'Como achar o aplicativo?', 'Como mudar a cor do aplicativo?', 'Dúvidas', 'Dúvidas'],
    },
    {
      nome: 'Segurança e Privacidade',
      cor: '#FDE4F5',
      icone: '🔒',
      perguntas: ['Dúvidas', 'Dúvidas', 'Dúvidas', 'Dúvidas', 'Dúvidas'],
    },
    {
      nome: 'Email',
      cor: '#FFF3DD',
      icone: '📧',
      perguntas: ['Dúvidas', 'Dúvidas', 'Dúvidas', 'Dúvidas', 'Dúvidas'],
    },
    {
      nome: 'Produtos',
      cor: '#E7FDE7',
      icone: '🛒',
      perguntas: ['Dúvidas', 'Dúvidas', 'Dúvidas', 'Dúvidas', 'Dúvidas'],
    },
    {
      nome: 'Configurações',
      cor: '#F2E7FD',
      icone: '⚙️',
      perguntas: ['Dúvidas', 'Dúvidas', 'Dúvidas', 'Dúvidas', 'Dúvidas'],
    },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Suporte</h1>
        <p>Navegue por nossas perguntas frequentes, tutoriais e outros recursos de autoajuda para encontrar as respostas de que você precisa.</p>
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar" />
          <button>Filtrar</button>
        </div>
        <div className="popular">
          <span>Popular: </span>
          <a href="#">Como conectar 2 monitores?</a>
          <a href="#">Como copiar e colar?</a>
        </div>
      </section>

      <section className="faq-grid">
        {categorias.map((cat, index) => (
          <div className="faq-card" key={index}>
            <div className="faq-header" style={{ backgroundColor: cat.cor }}>
              <span className="icon">{cat.icone}</span>
              <strong>{cat.nome}</strong>
            </div>
            <ul>
              {cat.perguntas.map((pergunta, i) => (
                <li key={i}>
                  📄 {pergunta} <span className="like">👍</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
