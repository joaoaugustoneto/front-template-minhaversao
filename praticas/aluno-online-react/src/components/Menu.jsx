function Menu(){
    // Captura a URL atual para sabermos qual link deve ficar destacado
    const currentPath = window.location.pathname;
    
    return (
        <>
        <nav className="sidebar-nav">
        <ul>
          <li>
            <a 
              href="/dashboard" 
              className={currentPath === '/dashboard' ? 'active' : ''}
            >
              Dashboard
            </a>
          </li>
          <li>
            <a 
              href="/notas" 
              className={currentPath === '/notas' ? 'active' : ''}
            >
              Notas
            </a>
          </li>
          <li>
            <a 
              href="/faltas" 
              className={currentPath === '/faltas' ? 'active' : ''}
            >
              Faltas
            </a>
          </li>
          <li>
            <a 
              href="/boletos" 
              className={currentPath === '/boletos' ? 'active' : ''}
            >
              Boletos
            </a>
          </li>
          <li>
            <a 
              href="/requerimentos" 
              className={currentPath === '/requerimentos' ? 'active' : ''}
            >
              Requerimentos
            </a>
          </li>
        </ul>
      </nav>

      {/* Rodapé da Sidebar */}
      <div className="sidebar-footer">
        <a href="/login" className="btn-sair">Sair</a>
      </div>
      </>
        )
}

export default Menu;