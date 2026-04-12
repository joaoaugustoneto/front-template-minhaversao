import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;