import React, { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState({ nome: '', marca: '' });

  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then(retorno => retorno.json())
      .then(dados => setProdutos(dados));
  }, []);

  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  };

  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar", {
      method: "POST",
      body: JSON.stringify(objProduto),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => { throw new Error(err.resposta); });
        }
        return res.json();
      })
      .then(novoProduto => {
        alert("Produto cadastrado com sucesso!");
        setProdutos([...produtos, novoProduto]);
        setObjProduto({ nome: '', marca: '' });
      })
      .catch(erro => alert("Erro: " + erro.message));
  };

  return (
    <div className="container mt-3">
      <Formulario
        botao={btnCadastrar}
        eventoTeclado={aoDigitar}
        cadastrar={cadastrar}
        obj={objProduto}
      />
      <Tabela vetor={produtos} />
    </div>
  );
}

export default App;
