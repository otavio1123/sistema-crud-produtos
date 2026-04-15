import React, { useState, useEffect } from "react";
import api from "../services/api";

function ProdutoForm({ aoCadastrar, produtoSelecionado }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidadeEstoque, setQuantidadeEstoque] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    if (produtoSelecionado) {
      setNome(produtoSelecionado.nome);
      setPreco(produtoSelecionado.preco);
      setCategoria(produtoSelecionado.categoria || "");
      setDescricao(produtoSelecionado.descricao || "");
      setQuantidadeEstoque(produtoSelecionado.quantidadeEstoque || "");
      setId(produtoSelecionado.id);
    }
  }, [produtoSelecionado]);

  const salvar = async (e) => {
    e.preventDefault();

    try {
      const dados = {
        nome,
        preco: Number(preco),
        categoria,
        descricao,
        quantidadeEstoque: Number(quantidadeEstoque)
      };

      if (id) {
        await api.put(`/produtos/${id}`, dados);
      } else {
        await api.post("/produtos", dados);
      }

      setNome("");
      setPreco("");
      setCategoria("");
      setDescricao("");
      setQuantidadeEstoque("");
      setId(null);

      aoCadastrar();

    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      alert("Erro ao salvar produto.");
    }
  };

  return (
    <form onSubmit={salvar}>
      <h2>{id ? "Editar Produto" : "Cadastrar Produto"}</h2>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />

      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantidade em estoque"
        value={quantidadeEstoque}
        onChange={(e) => setQuantidadeEstoque(e.target.value)}
      />

      <button type="submit">
        {id ? "Atualizar" : "Salvar"}
      </button>
    </form>
  );
}

export default ProdutoForm;