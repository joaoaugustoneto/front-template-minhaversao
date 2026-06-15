import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { criar } from "../services/produtoService";

function Formulario() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [erro, setErro] = useState();

    const salvar = async (dados) => {
        try {
            await criar(dados);
            navigate("/produtos");
        } catch (error) {
            setErro(`Deu ruim! ${error.message}`)
        };
    };

  return (
    <>
        <h1>Cadastro de Produtos</h1>
        <p>{erro}</p>
        <form onSubmit={handleSubmit(salvar)}>
            <input type="text" placeholder="Nome" {...register("nome")} />
            <input type="number" placeholder="0.00" {...register("preco")} />
            <input type="text" placeholder="Unidade" {...register("unidade")} />
            <Link to="/produtos">Cancelar</Link>
            <button type="submit">Salvar</button>
        </form>
    </>
  );
}

export default Formulario;