# Sistema CRUD de Produtos

## Acesso ao Projeto

[Repositório no GitHub](https://github.com/otavio1123/sistema-crud-produtos)

---

## Descrição

Este projeto consiste em um sistema básico orientado a objetos desenvolvido com frontend em React e backend em Java utilizando Spring Boot. O sistema permite o gerenciamento de produtos por meio das operações CRUD (Create, Read, Update, Delete).

O objetivo do sistema é possibilitar o cadastro, consulta, listagem, atualização e exclusão de produtos, simulando um cenário real de controle de dados.

---

## Tecnologias Utilizadas

### Backend
- Java
- Spring Boot
- Spring Data JPA
- H2 Database (modo persistente)

### Frontend
- JavaScript
- React

### Comunicação
- Axios

---

## Funcionalidades

- Cadastrar produto
- Listar produtos
- Consultar produto por nome
- Atualizar produto
- Excluir produto

---

## Estrutura do Sistema

### Backend
- Model: entidade Produto
- Repository: acesso ao banco
- Service: regras de negócio
- Controller: API REST

### Frontend
- Formulário de cadastro/edição
- Lista de produtos
- Campo de pesquisa

---

## Entidade Produto

- id
- nome
- preco
- categoria
- descricao
- quantidadeEstoque

---

## Como Executar o Sistema

### Backend

```bash
cd backend
.\mvnw.cmd spring-boot:run

Frontend
cd frontend
npm install
npm start
