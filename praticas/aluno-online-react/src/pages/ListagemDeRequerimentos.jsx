import { useState, useEffect } from 'react';
import Card from '../components/Card';
import DataTable from '../components/DataTable';
import './PagePadrao.css';
import { useNavigate } from 'react-router-dom';
import { listarRequerimentos } from '../services/requerimentoService';
import { useAuth } from '../hooks/useAuth';

function ListagemDeRequerimentos() {
  const headers = ["Protocolo", "Tipo de Requerimento", "Data", "Status"];
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [requerimentos, setRequerimentos] = useState([]);

  useEffect(() => {
    async function carregarRequerimentos() {
      try {
        const dados = await listarRequerimentos();
        setRequerimentos(dados);
      } catch (error) {
        if (error.status === 401) {
          logout();
        }
        console.error(error);
      }
    }
    carregarRequerimentos();
  }, [logout]);

  const data = requerimentos.map((req) => [
    req.protocolo,
    req.tipo,
    req.data,
    req.status
  ]);

  return (
    <div className="page-container">
      <h2 className="page-title">Meus Requerimentos</h2>
      
      <Card title="Histórico">
        <DataTable headers={headers} data={data} />
      </Card>
        <button 
          className="btn-novo-requerimento" 
          onClick={() => navigate('/requerimentos/novo')}
        >
          ➕ Novo Requerimento
        </button>
    </div>
  );
}

export default ListagemDeRequerimentos;