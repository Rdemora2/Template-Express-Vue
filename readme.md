# Api de gerenciamento de tarefas(CRUD)

## Sobre o projeto:
Seu backend foi organizado utilizando o padrão MSC (Model-Service-Controller) e, para maior segurança, foi utilizado token JWT para proteger as rotas de criação, atualização e exclusão de tarefas. Fora isso, também foi usada criptografia(bcrypt) para proteger a senha do usuário durante o fluxo de cadastro e login

## Preview:
http://ec2-18-219-149-156.us-east-2.compute.amazonaws.com:5000/

# Tecnologias utilizadas
## Back end
- Javascript
- Node.js
- Express
- Express validator
- Bcrypt
- Jsonwebtoken
- Sequelize
- Jest
- Supertest

## Front end
- Javascript
- Vue 3
- Vuetify 3

## Banco de dados
- postgreSQL

## Container
- Docker

## CI / CD
- Verificação de coverage dos testes(atualmente exige no mínimo 30%)
- Verificação de build do container docker

## Hospedagem
- Aws EC2

# Como executar o projeto
Pré-requisitos: Docker

```bash
# clonar repositório
git clone URL

# buildar os containers docker
docker compose build

# subir os containers
docker compose up -d

# acessar a url da aplicação
http://localhost:5000/
```

# Portas utilizadas
- Backend: 3000
- Frontend: 5000
- PostgreSQL: 5432

# Autor

Roberto de Moraes

https://www.linkedin.com/in/robertomoraeszarzur/
