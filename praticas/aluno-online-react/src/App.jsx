import Login from './pages/Login';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ListagemDeNotas from './pages/ListagemDeNotas';
import ListagemDeFaltas from './pages/ListagemDeFaltas';
import ListagemDeBoletos from './pages/ListagemDeBoletos';
import ListagemDeRequerimentos from './pages/ListagemDeRequerimentos';

function App() {
  const path = window.location.pathname;

  // Se estiver na raiz ou na página de login, mostra apenas a tela de Login
  if (path === '/' || path === '/login') {
    return <Login />;
  }

  // Descobre qual página interna deve ser carregada
  let ComponenteDaPagina;

  switch (path) {
    case '/dashboard':
      ComponenteDaPagina = <Dashboard />;
      break;
    case '/notas':
      ComponenteDaPagina = <ListagemDeNotas />;
      break;
    case '/faltas':
      ComponenteDaPagina = <ListagemDeFaltas />;
      break;
    case '/boletos':
      ComponenteDaPagina = <ListagemDeBoletos />;
      break;
    case '/requerimentos':
      ComponenteDaPagina = <ListagemDeRequerimentos />;
      break;
    default:
      // Se digitar uma URL que não existe, joga pro Dashboard
      ComponenteDaPagina = <Dashboard />; 
  }

  return (
    // Passamos o componente escolhido para dentro do Layout
    <Layout>
      {ComponenteDaPagina}
    </Layout>
  );
}

export default App;