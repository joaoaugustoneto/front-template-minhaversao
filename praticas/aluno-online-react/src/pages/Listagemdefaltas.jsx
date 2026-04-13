import Card from '../components/Card';
import DataTable from '../components/DataTable';
import './PagePadrao.css'; 

function ListagemDeFaltas() {
  // Configurando os dados via variáveis para passar como Props
  const headers = ["Disciplina", "Total de Faltas", "% de Presença"];
  
  const data2026_1 = [
    ["BI e Data Warehousing", "0", "100%"],
    ["Construção de Frontend", "0", "100%"],
    ["Manutenção de Software e Devops", "0", "100%"]
  ];

  const data2025_2 = [
    ["Construção de Backend", "27", "87.5%"],
    ["Estrutura de Dados", "9", "85%"],
    ["Gerenciamento de Projetos", "10.5", "82.5%"]
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">Histórico de Faltas por Semestre</h2>
      
      <Card title="2026.1">
        <DataTable headers={headers} data={data2026_1} />
      </Card>

      <Card title="2025.2">
        <DataTable headers={headers} data={data2025_2} />
      </Card>
    </div>
  );
}

export default ListagemDeFaltas;