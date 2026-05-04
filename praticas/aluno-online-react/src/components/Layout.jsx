import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <main className="page-content">
          {/* Aqui é onde as páginas (Dashboard, Notas, etc) vão aparecer */}
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;