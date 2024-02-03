# Api de gerenciamento de tarefas(CRUD)

## Sobre o projeto:
Seu backend foi organizado utilizando o padrão MSC (Model-Service-Controller) e, para maior segurança, foi utilizado token JWT para proteger as rotas de criação, atualização e exclusão de tarefas. Fora isso, também foi usada criptografia(bcrypt) para proteger a senha do usuário durante o fluxo de cadastro e login

# Tecnologias utilizadas
## Back end
- Javascript
- Node.js
- Express
- Express validator
- Bcrypt
- Jsonwebtoken
- Sequelize

## Front end

## Banco de dados
- postgreSQL

## Container
- Docker

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
URL
```

# Portas utilizadas
- Backend: 3000
- Frontend: 
- PostgreSQL: 5432

# Autor

Roberto de Moraes

https://www.linkedin.com/in/robertomoraeszarzur/
