import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { listar } from "../services/produtoService";
import { Link } from "react-router";

function Listagem() {
    const navigate = useNavigate();

    const [dados, setDados] = useState([]);

    useEffect(() => {
        const carregar = async () => {
            const resposta = await listar();
            setDados(resposta);
        };
        carregar();
    }, []);

  return (
    <>
        <h1>Lista de Produtos</h1>
        <button onClick={() => navigate("/produtos/novo")}>Adicionar Produto</button>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Unidade</th>
                </tr>
            </thead>
            <tbody>
                {dados.map((item) => (
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.preco}</td>
                        <td>{item.unidade}</td>
                        <td>
                            <Link to={`/produtos/editar${item.id}`}>Editar</Link>
                            |
                            <Link to="/produtos">Excluir</Link>
                        </td>
                    </tr>
                ))} 
            </tbody>
        </table>
    </>
  );
}

export default Listagem;