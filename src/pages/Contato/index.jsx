import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [error, setError] = useState("");
  const navegate = useNavigate();

  function checkSubmit(e) {
    e.preventDefault();

    if (nome && email && mensagem) {

      navegate("/resultado", { state: {nome, email, mensagem}});
    } else {
      setError("ó u doido, digita os bagulhos ai");
    }
  }

  return (
    <>
      <h1>Contato</h1>
      <form onSubmit={checkSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mensagem">mensagem</label>
          <br />
          <textarea
            name="mensagem"
            id="mensagem"
            cols={28}
            rows={4}
            onChange={(e) => setMensagem(e.target.value)}
          ></textarea>
        </div>
        <button>Enviar</button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};
