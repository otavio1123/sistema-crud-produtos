import React, { useState } from "react";
import "./App.css";
import ProdutoForm from "./components/ProdutoForm";
import ProdutoLista from "./components/ProdutoLista";

function App() {
  const [atualizar, setAtualizar] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const recarregar = () => {
    setAtualizar(!atualizar);
    setProdutoSelecionado(null);
  };

  const editarProduto = (produto) => {
    setProdutoSelecionado(produto);
  };

  return (
    <div className="App">
      <h1>Sistema CRUD</h1>

      <ProdutoForm
        aoCadastrar={recarregar}
        produtoSelecionado={produtoSelecionado}
      />

      <hr />

      <ProdutoLista
        atualizar={atualizar}
        aoEditar={editarProduto}
      />
    </div>
  );
}

export default App;