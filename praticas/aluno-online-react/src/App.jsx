import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ListagemDeFaltas from "./pages/Listagemdefaltas";
import ListagemDeNotas from "./pages/Listagemdenotas";
import ListagemDeBoletos from "./pages/Listagemdeboletos";
import ListagemDeRequerimentos from "./pages/Listagemderequerimentos";

function App() {
  return (
    <Layout>
      {/* Altere o componente aqui dentro para visualizar as outras páginas */}
      <ListagemDeRequerimentos />
    </Layout>
  );
}

export default App;
