import Card from '../components/Card';
import DataTable from '../components/DataTable';
import './PagePadrao.css';

function ListagemDeBoletos() {
  const headers = ["Mês Referência", "Vencimento", "Valor", "Status"];
  
  const data = [
    ["Maio/2026", "10/05/2026", "R$ 850,00", "Aberto"],
    ["Abril/2026", "10/04/2026", "R$ 850,00", "Pago"],
    ["Março/2026", "10/03/2026", "R$ 850,00", "Pago"]
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">Listagem de Boletos</h2>
      
      <Card title="Semestre Atual">
        <DataTable headers={headers} data={data} />
      </Card>
    </div>
  );
}

export default ListagemDeBoletos;