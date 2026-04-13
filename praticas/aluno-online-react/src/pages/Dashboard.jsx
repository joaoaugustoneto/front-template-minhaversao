import './Dashboard.css';
import Card from '../components/Card';

function Dashboard() {
  return (
    <div className="page-container">
      <h2 className="page-title">Bem-vindo ao portal do aluno</h2>
      <section className="dashboard-grid">
        <Card title="Mural de Avisos">
          <ul className="dashboard-list">
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante de turma</li>
          </ul>
        </Card>
        <Card title="Calendário Acadêmico">        
          <ul className="dashboard-list">
            <li><strong>23/02</strong> - Início do período letivo 2026-1</li>
            <li><strong>25/04</strong> - Prazo final para aplicação da P1</li>
            <li><strong>23/06</strong> - Prazo final para aplicação da P2</li>
            <li><strong>04/07</strong> - Fim do período letivo 2026-1</li>
          </ul>
        </Card>
        <Card title="Minhas Disciplinas">
          <ul className="dashboard-list">
            <li>Construção de front-end</li>
            <li>BI e Data Warehousing</li>
            <li>DevOps e Manutenção de Software</li>
            <li>Governança de TI</li>
            <li>Direitos Humanos e Ambientais</li>
            <li>Projeto de Inovação e Criatividade</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}

export default Dashboard;