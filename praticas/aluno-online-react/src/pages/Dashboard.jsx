import './Dashboard.css';

function Dashboard() {
  return (
    <div className="page-container">
      <h2 className="page-title">Bem-vindo ao portal do aluno</h2>
      <section className="dashboard-grid">
        <article className="card">
          <h3>Mural de Avisos</h3>
          <ul>
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante de turma</li>
          </ul>
        </article>
        <article className="card">
          <h3>Calendário Acadêmico</h3>
          <ul className="academic-dates">
            <li><strong>23/02</strong> - Início do período letivo 2026-1</li>
            <li><strong>25/04</strong> - Prazo final para aplicação da P1</li>
            <li><strong>23/06</strong> - Prazo final para aplicação da P2</li>
            <li><strong>04/07</strong> - Fim do período letivo 2026-1</li>
          </ul>
        </article>
        <article className="card">
          <h3>Minhas Disciplinas</h3>
          <ul>
            <li>Construção de front-end</li>
            <li>BI e Data Warehousing</li>
            <li>DevOps e Manutenção de Software</li>
            <li>Governança de TI</li>
            <li>Direitos Humanos e Ambientais</li>
            <li>Projeto de Inovação e Criatividade</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default Dashboard;