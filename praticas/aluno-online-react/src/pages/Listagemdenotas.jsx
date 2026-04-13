import Card from '../components/Card';
import DataTable from '../components/DataTable';
import './PagePadrao.css';

function ListagemDeNotas() {
  const headers = ["Disciplina", "A1", "A2", "Média", "Situação"];
  
  const data2026_1 = [
    ["BI e Data Warehousing", "-", "-", "-", "Em curso"],
    ["Construção de Frontend", "-", "-", "-", "Em curso"]
  ];

  const data2025_2 = [
    ["Construção de Backend", "9.0", "8.5", "8.75", "Aprovado"],
    ["Estrutura de Dados", "7.5", "8.0", "7.75", "Aprovado"]
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">Histórico de Notas por Semestre</h2>
      
      <Card title="2026.1">
        <DataTable headers={headers} data={data2026_1} />
      </Card>

      <Card title="2025.2">
        <DataTable headers={headers} data={data2025_2} />
      </Card>
    </div>
  );
}

export default ListagemDeNotas;