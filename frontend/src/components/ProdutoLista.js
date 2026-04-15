import React, { useEffect, useState } from "react";
import api from "../services/api";

function ProdutoLista({ atualizar, aoEditar }) {
  const [produtos, setProdutos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  const carregar = async () => {
    try {
      const response = await api.get("/produtos");
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  const excluir = async (id) => {
    try {
      const confirmar = window.confirm("Tem certeza que deseja excluir este produto?");
      if (!confirmar) return;

      await api.delete(`/produtos/${id}`);
      carregar();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      alert("Erro ao excluir produto. Veja o console do navegador.");
    }
  };

  useEffect(() => {
    carregar();
  }, [atualizar]);

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div>
      <h2>Lista de Produtos</h2>

     <input
  type="text"
  className="pesquisa"
  placeholder="Pesquisar produto por nome"
  value={pesquisa}
  onChange={(e) => setPesquisa(e.target.value)}
/>

      {produtosFiltrados.length === 0 ? (
        <p className="vazio">Nenhum produto encontrado.</p>
      ) : (
        <div className="lista-produtos">
          {produtosFiltrados.map((p) => (
            <div key={p.id} className="item-produto">
              <div className="info-produto">
                <strong>Nome:</strong> {p.nome} <br />
                <strong>Preço:</strong> R$ {p.preco} <br />
                <strong>Categoria:</strong> {p.categoria} <br />
                <strong>Descrição:</strong> {p.descricao} <br />
                <strong>Estoque:</strong> {p.quantidadeEstoque}
              </div>

              <div className="acoes-produto">
                <button onClick={() => aoEditar(p)}>Editar</button>
                <button onClick={() => excluir(p.id)}>Excluir</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProdutoLista;