import './Aplicativos.css';
import { Setavolta } from "../../../components/Setavolta";

function Aplicativos() {
  return (
    <div className="categoria-page">
      <Setavolta /> {/* Componente de seta para voltar */}
      
      <h1>Categoria: Aplicativos</h1>
      {/* aqui você pode exibir os dados reais */}
    </div>
  );
}

export default Aplicativos;