import { Outlet } from 'react-router-dom'; 
import Sidebar from "./Sidebar"; 
import Topbar from "./Topbar";
import './Layout.css';

function Layout() {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;