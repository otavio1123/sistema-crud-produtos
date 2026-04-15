package com.example.backend.service;

import com.example.backend.model.Produto;
import com.example.backend.repository.ProdutoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    private final ProdutoRepository repository;

    public ProdutoService(ProdutoRepository repository) {
        this.repository = repository;
    }

    public List<Produto> listarTodos() {
        return repository.findAll();
    }

    public Optional<Produto> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public Produto salvar(Produto produto) {
        return repository.save(produto);
    }

 public Produto atualizar(Long id, Produto produtoAtualizado) {
    return repository.findById(id)
            .map(produto -> {
                produto.setNome(produtoAtualizado.getNome());
                produto.setPreco(produtoAtualizado.getPreco());
                produto.setCategoria(produtoAtualizado.getCategoria());
                produto.setDescricao(produtoAtualizado.getDescricao());
                produto.setQuantidadeEstoque(produtoAtualizado.getQuantidadeEstoque());
                return repository.save(produto);
            })
            .orElseThrow(() -> new RuntimeException("Produto não encontrado"));
}
    public void excluir(Long id) {
        repository.deleteById(id);
    }
}