import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Login from './pages/Login';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ListagemDeNotas from './pages/ListagemDeNotas';
import ListagemDeFaltas from './pages/ListagemDeFaltas';
import ListagemDeBoletos from './pages/ListagemDeBoletos';
import ListagemDeRequerimentos from './pages/ListagemDeRequerimentos';

function App() {
  const { autenticado } = useAuth(); 

  return (
    <Routes>
      {!autenticado ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      ) : (
        
        <>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="notas" element={<ListagemDeNotas />} />
            <Route path="faltas" element={<ListagemDeFaltas />} />
            <Route path="boletos" element={<ListagemDeBoletos />} />
            <Route path="requerimentos" element={<ListagemDeRequerimentos />} />
          </Route>
          
          <Route path="/login" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </>
      )}
    </Routes>
  );
}

export default App;
