import Card from "./Card";
import Topbar from "./Topbar";

function Main (){
    return (
        <main className="main-content">
            <Topbar/>
            <h2>Bem-vindo ao portal do aluno</h2>
            <Card/>
        </main>
    );
}

export default Main;