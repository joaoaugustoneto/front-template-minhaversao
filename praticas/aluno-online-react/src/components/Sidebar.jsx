import Menu from './Menu';
import logo from '../assets/learn.svg'; // Importando a logo do projeto
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Cabeçalho da Sidebar (Mantendo o estilo antigo) */}
      <div className="sidebar-header">
        <img src={logo} alt="Logo Aluno Online" className="sidebar-logo" />
        <h2>Aluno Online</h2>
      </div>

      <Menu></Menu>
    </aside>
  );
}

export default Sidebar;