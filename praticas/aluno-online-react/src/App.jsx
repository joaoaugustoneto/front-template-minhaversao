import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout'; 
import Dashboard from './pages/Dashboard';
import ListagemDeNotas from './pages/ListagemDeNotas';
import ListagemDeFaltas from './pages/ListagemDeFaltas';
import ListagemDeBoletos from './pages/ListagemDeBoletos';
import ListagemDeRequerimentos from './pages/ListagemDeRequerimentos';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="notas" element={<ListagemDeNotas />} />
        <Route path="faltas" element={<ListagemDeFaltas />} />
        <Route path="boletos" element={<ListagemDeBoletos />} />
        <Route path="requerimentos" element={<ListagemDeRequerimentos />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;