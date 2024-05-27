# Desafio Técnico - Multipedidos

Objetivo: Avaliar suas habilidades de desenvolvimento através da criação de um CRUD (Create, Read, Update, Delete) com um frontend interagindo com um Lambda que armazena dados em um banco DynamoDB.

## Instruções Técnicas

## Frontend
- A aplicação foi desenvolvida em Vue 3, utilizando Tailwind 3
- Para melhor organização e reaproveitamento do código, utilizei Composibles, deixando todos os métodos de requisição http em um único arquivo centralizado, chamado items.js
- O CRUD de Items esta na pasta components/items com seus respectivos arquivos de Cadastro, Listagem, Edição e Exclusão.

## Instruções de utilização:
- Para executar a aplicação frontend localmente, siga os passos a seguir:
- 1) git clone git@github.com:matheustavaresg/multipedidos-frontend.git
- 2) npm install
- 3) Por se tratar de um ambiente de desenvolvimento, onde a intenção é mostrar a comunicação do frontend com o backend, vamos utilizar o navegador com a opção de segurança desabilitada conforme abaixo:
- 3) Exemplo: chrome.exe --user-data-dir="C://chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials
