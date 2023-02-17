import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from "./services/api";

import "./styles.css";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  function verification(response) {
    if (Object.keys(response.data).length === 1) {
      alert("Verifique o campo preenchido e tente novamente!");
    }
  }

  async function handleSearch() {
    if (input === "") {
      alert("Preencha com algum CEP");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      verification(response);
      setInput("");
    } catch (error) {
      alert("Erro ao buscar CEP");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite o CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      {Object.keys(cep).length > 1 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
