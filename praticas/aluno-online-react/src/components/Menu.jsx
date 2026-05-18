import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // 1. Importando o hook de autenticação

function Menu() {
  const { logout } = useAuth(); // 2. Pegando a função de logout do contexto global

  return (
    <>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/notas">Notas</NavLink>
          </li>
          <li>
            <NavLink to="/faltas">Faltas</NavLink>
          </li>
          <li>
            <NavLink to="/boletos">Boletos</NavLink>
          </li>
          <li>
            <NavLink to="/requerimentos">Requerimentos</NavLink>
          </li>
        </ul>
      </nav>

      {/* Rodapé da Sidebar */}
      <div className="sidebar-footer">
        {/* 3. Mudamos para um <button> com o evento onClick disparando o logout */}
        <button onClick={logout} className="btn-sair">
          Sair
        </button>
      </div>
    </>
  );
}

export default Menu;