import './ListagemDeNotas.css';

function ListagemDeNotas() {
  return (
    <div className="page-container">
      <h2 className="page-title">Histórico de Notas por Semestre</h2>
      
      <section className="semester-card">
        <h3>2026.1</h3>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>A1</th>
                <th>A2</th>
                <th>Média</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BI e Data Warehousing</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>Em curso</td>
              </tr>
              <tr>
                <td>Construção de Frontend</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>Em curso</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="semester-card">
        <h3>2025.2</h3>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>A1</th>
                <th>A2</th>
                <th>Média</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Construção de Backend</td>
                <td>9.0</td>
                <td>8.5</td>
                <td>8.75</td>
                <td>Aprovado</td>
              </tr>
              <tr>
                <td>Estrutura de Dados</td>
                <td>7.5</td>
                <td>8.0</td>
                <td>7.75</td>
                <td>Aprovado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default ListagemDeNotas;