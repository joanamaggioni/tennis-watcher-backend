# Plataforma de Tênis - Backend

## Visão Geral
Backend RESTful API para a Plataforma de Tênis, construído com Node.js e Express. Responsável por autenticação, gerenciamento de usuários e fornecimento dos dados para o frontend.

## Funcionalidades
- Endpoints para login, registro, edição e exclusão de usuários
- Proteção de rotas com middleware de autenticação e autorização via JWT
- Armazenamento persistente em arquivo JSON (`db.json`)
- Hash de senhas usando bcrypt para segurança
- Controle de acesso por perfis (usuário comum e administrador)

## Tecnologias
- Node.js
- Express
- bcrypt
- JSON para persistência de dados (arquivo `db.json`)
- jsonwebtoken (JWT)

## Como rodar localmente
- Clone este repositório: git clone git@github.com:joanamaggioni/tennis-watcher-backend.git
- Entre na pasta do backend e instale as dependências: npm install
- Inicie o servidor: npm start
O servidor rodará em http://localhost:5000

## Endpoints principais
POST /auth/login — Login de usuário
POST /auth/register — Registro de novo usuário
GET /users — Listar usuários (admin apenas)
PUT /users/:id — Editar usuário (admin apenas)
DELETE /users/:id — Excluir usuário (admin apenas)

## Considerações
- Embora o armazenamento seja feito em arquivo JSON, a estrutura permite fácil migração para banco de dados real (MongoDB, PostgreSQL, etc).
- O sistema usa JWT para segurança e controle de acesso.
- Senhas são armazenadas de forma segura com hash bcrypt.

## Próximos passos / melhorias
- Implementar banco de dados real
- Adicionar logs e monitoramento
- Melhorar tratamento de erros e validações
