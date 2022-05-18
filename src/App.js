import React from "react";
import { useState } from "react";
import api from "./services/Api";
import Result from "./components/Result";
import Button from "./components/Button";
import "./Style.css";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha Algum cep");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Ops... Erro ao buscar");
      setInput("");
    }
  }

  return (
    <div className='container'>
      <h1 className='title'>Buscador de Cep</h1>
      <div className='container-input'>
        <input
          type='text'
          placeholder='Digite seu cep...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button handleSearch={handleSearch} />
      </div>
      <Result cep={cep} />
    </div>
  );
}

export default App;
