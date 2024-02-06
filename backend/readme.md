# Endpoints:
## Registro de Usuário

**Endpoint:** http://localhost:3000/api/auth/register

**Método:** POST

**Formato de Requisição:**
```json
{
  "name": "Nome do Usuário",
  "email": "usuario@example.com",
  "password": "senha_secreta"
}
```

**Formato de Resposta:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjkzODY3ODQyLCJleHAiOjE2OTM5NTQyNDJ9.5oekHX_68fXeVdAGuB7EtOmHDdrJMzUkVdhe-OAL31s"
}
```
- OBS: token JWT válido por 1 dia

## Login de Usuário

**Endpoint:** http://localhost:3000/api/auth/login

**Método:** POST

**Formato de Requisição:**
```json
{
  "email": "usuario@example.com",
  "password": "senha"
}
```

**Formato de Resposta:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjkzODY3ODQyLCJleHAiOjE2OTM5NTQyNDJ9.5oekHX_68fXeVdAGuB7EtOmHDdrJMzUkVdhe-OAL31s"
}
```
- OBS: token JWT válido por 1 dia

## Validação de Token

**Endpoint:** http://localhost:3000/api/auth/validate-token

**Método:** GET

**Header:** Authorization: Bearer {token}

**Formato de Requisição:**
```json
```


**Formato de Resposta:**
```json
{
    "message": "Token válido"
}
```

## Criação de Tarefa

**Endpoint:** http://localhost:3000/api/tasks

**Método:** POST

**Header:** Authorization: Bearer {token}

**Formato de Requisição:**
```json
{
    "title": "Nome da Tarefa",
    "description": "Descrição da tarefa",
    "status": "Status da tarefa",
}
```
- Campos de status Aceitos: 'pendente', 'em andamento', 'concluída'

**Formato de Resposta:**
```json
{
  "id": 1,
    "title": "Nome da Tarefa",
    "description": "Descrição da tarefa",
    "status": "Status da tarefa",
    "createdAt": "Data de Criação",
    "updatedAt": "Data de Atualização"
}
```

## Listagem geral de Tarefas

**Endpoint:** http://localhost:3000/api/tasks

**Método:** GET

**Header:** Authorization: Bearer {token}

**Formato de Requisição:**
```json
```
- Esse endpoint não necessita de nada na requisição, pois serve apenas para visualização das tarefas

**Formato de Resposta:**
```json
[
  {
    "id": 1,
    "title": "Nome da Tarefa",
    "description": "Descrição da tarefa",
    "status": "Status da tarefa",
    "createdAt": "Data de Criação",
    "updatedAt": "Data de Atualização"
  },
  {
    "id": 2,
    "title": "Nome da Tarefa 2",
    "description": "Descrição da tarefa 2",
    "status": "Status da tarefa",
    "createdAt": "Data de Criação",
    "updatedAt": "Data de Atualização"
  }
]
```

## Listagem Tarefa por ID

**Endpoint:** http://localhost:3000/api/tasks/{taskID_desejado}

**Método:** GET

**Header:** Authorization: Bearer {token}

**Formato de Requisição:**
```json
```
- Esse endpoint não necessita de nada na requisição, pois serve apenas para visualização da tarefa

**Formato de Resposta:**
```json
{
  "id": "{taskID}",
  "title": "Minha Tarefa",
  "description": "Esta é uma descrição da minha tarefa",
  "status": "em andamento",
  "createdAt": "Data de Criação",
  "updatedAt": "Data de Atualização"
}
```

## Listagem Tarefa por status

**Endpoint:** http://localhost:3000/api/tasks/status/{status_desejado}

**Método:** GET

**Header:** Authorization: Bearer {token}

**Formato de Requisição:**
```json
```
- Esse endpoint não necessita de nada na requisição, pois serve apenas para visualização das tarefas

**Formato de Resposta:**
```json
[
  {
    "id": 1,
    "title": "Nome da Tarefa",
    "description": "Descrição da tarefa",
    "status": "Status da tarefa",
    "createdAt": "Data de Criação",
    "updatedAt": "Data de Atualização"
  },
  {
    "id": 2,
    "title": "Nome da Tarefa 2",
    "description": "Descrição da tarefa 2",
    "status": "Status da tarefa",
    "createdAt": "Data de Criação",
    "updatedAt": "Data de Atualização"
  }
]
```

## Edição de Tarefa

**Endpoint:** http://localhost:3000/api/tasks/{taskID_desejado}

**Método:** PUT

**Header:** Authorization: Bearer {token}

**Formato de Requisição:**
```json
{
    "title": "Nome da Tarefa",
    "description": "Descrição da tarefa",
    "status": "Status da tarefa",
}
```
- Campos de status Aceitos: 'pendente', 'em andamento', 'concluída'

**Formato de Resposta:**
```json
{
    "id": "{taskID}",
    "title": "Nome da Tarefa",
    "description": "Descrição da tarefa",
    "status": "Status da tarefa",
    "createdAt": "Data de Criação",
    "updatedAt": "Data de Atualização"
}
```

## Exclusão de Tarefa

**Endpoint:** http://localhost:3000/api/tasks/{taskID_desejado}

**Método:** DELETE

**Header:** Authorization: Bearer {token}

**Formato de Requisição:**
```json
```

**Formato de Resposta:**
```json
```
- Esse endpoint não retorna apenas um status 201 em caso de sucesso