import Card from '../components/Card';
import DataTable from '../components/DataTable';
import './PagePadrao.css';
import { useNavigate } from 'react-router-dom';

function ListagemDeRequerimentos() {
  const headers = ["Protocolo", "Tipo de Requerimento", "Data", "Status"];
  const navigate = useNavigate();

  const data = [
    ["REQ-10293", "Revisão de Menção", "01/04/2026", "Em Análise"],
    ["REQ-10304", "Dispensa de Disciplina", "15/02/2026", "Deferido"],
    ["REQ-10455", "Trancamento de Matrícula", "10/11/2025", "Indeferido"]
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">Meus Requerimentos</h2>
      
      <Card title="Histórico">
        <DataTable headers={headers} data={data} />
      </Card>
        <button 
          className="btn-novo-requerimento" 
          onClick={() => navigate('/requerimentos/novo')}
        >
          ➕ Novo Requerimento
        </button>
    </div>
  );
}

export default ListagemDeRequerimentos;