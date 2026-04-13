import './ListagemDeRequerimentos.css';

function ListagemDeRequerimentos() {
  return (
    <div className="page-container">
      <h2 className="page-title">Meus Requerimentos</h2>
      
      <section className="semester-card">
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Protocolo</th>
                <th>Tipo de Requerimento</th>
                <th>Data</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>REQ-10293</td>
                <td>Revisão de Menção</td>
                <td>01/04/2026</td>
                <td>Em Análise</td>
              </tr>
              <tr>
                <td>REQ-10304</td>
                <td>Dispensa de Disciplina</td>
                <td>15/02/2026</td>
                <td>Deferido</td>
              </tr>
              <tr>
                <td>REQ-10455</td>
                <td>Trancamento de Matrícula</td>
                <td>10/11/2025</td>
                <td>Indeferido</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default ListagemDeRequerimentos;