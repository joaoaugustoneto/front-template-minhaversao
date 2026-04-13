import './ListagemDeFaltas.css';

function ListagemDeFaltas() {
  return (
    <div className="page-container">
      <h2 className="page-title">Histórico de Faltas por Semestre</h2>
      
      <section className="semester-card">
        <h3>2026.1</h3>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Total de Faltas</th>
                <th>% de Presença</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BI e Data Warehousing</td>
                <td>0</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Construção de Frontend</td>
                <td>0</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Manutenção de Software e Devops</td>
                <td>0</td>
                <td>100%</td>
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
                <th>Total de Faltas</th>
                <th>% de Presença</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Construção de Backend</td>
                <td>27</td>
                <td>87.5%</td>
              </tr>
              <tr>
                <td>Estrutura de Dados</td>
                <td>9</td>
                <td>85%</td>
              </tr>
              <tr>
                <td>Gerenciamento de Projetos</td>
                <td>10.5</td>
                <td>82.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default ListagemDeFaltas;