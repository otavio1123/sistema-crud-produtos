# Sistema CRUD de Produtos

## Descrição
# Sistema CRUD de Produtos

## Acesso ao Projeto

[Repositório no GitHub](https://github.com/otavio1123/sistema-crud-produtos)
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
- Axios (requisições HTTP entre frontend e backend)

---

## Funcionalidades

O sistema implementa as seguintes funcionalidades:

- Cadastrar produto
- Listar produtos
- Consultar produto por nome (pesquisa)
- Atualizar produto
- Excluir produto

---

## Estrutura do Sistema

O backend foi organizado em camadas:

- Model: representa a entidade Produto
- Repository: responsável pelo acesso ao banco de dados
- Service: contém as regras de negócio
- Controller: expõe as rotas da API REST

O frontend foi desenvolvido em componentes React, incluindo:

- Formulário para cadastro e edição de produtos
- Lista de produtos
- Campo de pesquisa por nome

---

## Entidade Produto

A entidade Produto possui os seguintes atributos:

- id
- nome
- preco
- categoria
- descricao
- quantidadeEstoque

---

## Execução do Projeto

### Backend

```bash
cd backend
.\mvnw.cmd spring-boot:run
