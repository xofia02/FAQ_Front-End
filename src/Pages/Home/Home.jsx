import './Style.css';

function Home() {
  return (
    <div className="home-container">

      {/* Bloco 1: Barra de pesquisa com título */}
      <div className="search-section">
        <h1>Bem-vindo ao FAQ</h1>
        <input
          type="text"
          placeholder="Pesquise uma pergunta..."
          className="search-input"
        />
      </div>

      {/* Bloco 2: Container grande para os cards */}
      <div className="card-box">
        {/* Bloco 3: Os 6 cards */}
        <div className="card-grid">
          <div className="card">Pergunta 1<br /><small>Resposta curta 1</small></div>
          <div className="card">Pergunta 2<br /><small>Resposta curta 2</small></div>
          <div className="card">Pergunta 3<br /><small>Resposta curta 3</small></div>
          <div className="card">Pergunta 4<br /><small>Resposta curta 4</small></div>
          <div className="card">Pergunta 5<br /><small>Resposta curta 5</small></div>
          <div className="card">Pergunta 6<br /><small>Resposta curta 6</small></div>
        </div>
      </div>

    </div>
  );
}

export default Home;
