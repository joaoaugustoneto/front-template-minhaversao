import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/notas">
              Notas
            </NavLink>
          </li>
          <li>
            <NavLink to="/faltas">
              Faltas
            </NavLink>
          </li>
          <li>
            <NavLink to="/boletos">
              Boletos
            </NavLink>
          </li>
          <li>
            <NavLink to="/requerimentos">
              Requerimentos
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/login" className="btn-sair">
          Sair
        </NavLink>
      </div>
    </>
  );
}

export default Menu;