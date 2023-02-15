import { FiSearch } from "react-icons/fi";

import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite o CEP..." />
        <button className="buttonSearch">
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 60743805</h2>
        <span>Rua tal</span>
        <span>Complemento algum</span>
        <span>Passaré</span>
        <span>Fortaleza - CE</span>
      </main>
    </div>
  );
}

export default App;
