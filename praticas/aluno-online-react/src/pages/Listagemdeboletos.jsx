import './ListagemDeBoletos.css';

function ListagemDeBoletos() {
  return (
    <div className="page-container">
      <h2 className="page-title">Listagem de Boletos</h2>
      
      <section className="semester-card">
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Mês Referência</th>
                <th>Vencimento</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maio/2026</td>
                <td>10/05/2026</td>
                <td>R$ 850,00</td>
                <td>Aberto</td>
              </tr>
              <tr>
                <td>Abril/2026</td>
                <td>10/04/2026</td>
                <td>R$ 850,00</td>
                <td>Pago</td>
              </tr>
              <tr>
                <td>Março/2026</td>
                <td>10/03/2026</td>
                <td>R$ 850,00</td>
                <td>Pago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default ListagemDeBoletos;