<h1 align="center">Trilhas de Tecnologia</h1>

<p align="center">Olá, seja bem vindo(a). Este é o projeto de Trilhas de Tecnologia, desenvolvido no hackathon organizado pelas turmas 11 e 12 da Trybe.</p>

 <p align="center">
  <a href="#bookmark-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer_and_wrench-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_right_hook-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#notebook-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<h2>:bookmark: Sobre</h2>
<p>
Sobre ...
</p>


<h2>:rocket: Tecnologias</h2>

 Este projeto foi desenvolvido com as seguintes tecnologias:

- [MongoDB](https://www.mongodb.com/pt-br)
- [Express](https://expressjs.com/pt-br/)
- [Swagger](https://swagger.io/)



<h2>:hammer_and_wrench: Features</h2>

- [x] Criar um usuário
- [x] Editar um usuário
- [x] Listar usuário por ID
- [x] Listar todos os usuários
- [x] Realizar Login
- [x] Listar tecnologias
- [x] Listar referências
- [x] Criar uma trilha
- [x] Editar uma trilha
- [x] Excluir uma trilha
- [x] Listar trilhas
- [x] Listar uma única trilha
- [x] Listar trilhas por tecnologia

<h2>:arrow_right_hook: Rotas</h2>

<h3>/users</h3>

```bash

## POST

# Corpo da requisição
{
	"name": "Zeon",
	"email": "zeon@gmail.com",
	"password": "12345678"
}

# Resposta da requisição
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYxYjdjY2NmZmJlZjc5NDg0NDY2M2U5YSIsIm5hbWUiOiJaZW9uIiwiZW1haWwiOiJ6ZW9uQGdtYWlsLmNvbSJ9LCJpYXQiOjE2Mzk0MzU0NzIsImV4cCI6MTY0MDQ3MjI3Mn0.ajyzcXzBrJtN0euNzdfpTddOQ3p1mfyONtES-X-pgOQ",
  "user": {
    "_id": "61b7cccffbef794844663e9a",
    "name": "Zeon",
    "email": "zeon@gmail.com"
  }
}

## GET

# Resposta da requisição

[
  {
    "_id": "61b7be6c30d196288ff1f97a",
    "name": "Julio de Barros",
    "email": "julio11lp@hotmail.com",
  },
  {
    "_id": "61b7cccffbef794844663e9a",
    "name": "Zeon",
    "email": "zeon@gmail.com",
  }
]

```

<h3>/users:id</h3>

```bash

## GET

# params: id do usuário

> /users/61b7a73194f79dd8571bc95f

# Resposta da requisição
{
  "_id": "61b7a73194f79dd8571bc95f",
  "name": "lzzHenrique",
  "email": "luishenrique@hotmail.com",
    "technologies": [
    "JavaScript",
    "React.js",
    "Node.js"
  ],
  "trails": {
    "myTrails": [
      "61b7a78a94f79dd8571bc960",
      "61b7a82494f79dd8571bc961"
    ],
    "likedTrails": [
      "61b7c29115778737e9097485"
    ]
  }
}

## PUT

# params: id do usuário

> /users/61b7a73194f79dd8571bc95f

# Corpo da requisição

{
  "name": "Matheus",
  "email": "email@email.com",
	"password": "12345678",
	"technologies": ["JavaScript", "React.js", "Node.js"]
}

# Resposta da requisição

{
  "_id": "61b7b4b009029eb4c9125be7",
  "name": "Zeon",
  "email": "zeon@gmail.com",
  "technologies": [
    "JavaScript",
    "React.js",
    "Node.js"
  ],
   "trails": {
   "myTrails": [
     "61b7a78a94f79dd8571bc960",
     "61b7a82494f79dd8571bc961"
   ],
   "likedTrails": [
     "61b7c29115778737e9097485"
   ]
  }
}

```

<h3>/users/trails:id</h3>

```bash

## GET

# params: id do usuário

> /users/61b7a73194f79dd8571bc95f

# Resposta da requisição
{
  "myTrails": [
    "61b7a78a94f79dd8571bc960",
    "61b7a82494f79dd8571bc961"
  ],
  "likedTrails": [
    "61b7c29115778737e9097485",
    "61b7e9b4fc15cc7612690240"
  ]
}
```


<h3>/login</h3>

 ```bash

## POST

# Corpo da requisição
{
	"email": "zeon@gmail.com",
	"password": "12345678"
}

# Resposta da requisição
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYxYjdjY2NmZmJlZjc5NDg0NDY2M2U5YSIsIm5hbWUiOiJaZW9uIiwiZW1haWwiOiJ6ZW9uQGdtYWlsLmNvbSJ9LCJpYXQiOjE2Mzk0MzU0NzIsImV4cCI6MTY0MDQ3MjI3Mn0.ajyzcXzBrJtN0euNzdfpTddOQ3p1mfyONtES-X-pgOQ",
  "user": {
    "_id": "61b7cccffbef794844663e9a",
    "name": "Zeon",
    "email": "zeon@gmail.com"
  }
}

```

<h3>/technologies</h3>

 ```bash

## GET

# Resposta da requisição
[
  {
    "_id": "61b776d8f9519dc843697bd0",
    "name": "Javascript"
  },
  {
    "_id": "61b776d8f9519dc843697bd1",
    "name": "Docker"
  },
  {
    "_id": "61b776d8f9519dc843697bd2",
    "name": "Typescript"
  },
  {
    "_id": "61b776d8f9519dc843697bd3",
    "name": "Node.js"
  },
  {
    "_id": "61b776d8f9519dc843697bd4",
    "name": "React"
  },
  {
    "_id": "61b776d8f9519dc843697bd5",
    "name": "Mongodb"
  },
  {
    "_id": "61b776d8f9519dc843697bd6",
    "name": "MySQL"
  },
  {
    "_id": "61b776d8f9519dc843697bd7",
    "name": "Next"
  },
  {
    "_id": "61b776d8f9519dc843697bd8",
    "name": "Python"
  }
]

```

<h3>/references</h3>

 ```bash

## GET

# Resposta da requisição
[
  {
    "_id": "61b7b1a0f89b3c0648829734",
    "name": "Livro"
  },
  {
    "_id": "61b7b1a0f89b3c0648829735",
    "name": "Video"
  },
  {
    "_id": "61b7b1a0f89b3c0648829736",
    "name": "Curso Livre"
  },
  {
    "_id": "61b7b1a0f89b3c0648829737",
    "name": "Faculdade"
  },
  {
    "_id": "61b7b1a0f89b3c0648829738",
    "name": "Documentação"
  },
  {
    "_id": "61b7b1a0f89b3c0648829739",
    "name": "Comunidades de Software"
  }
]

```

<h3>/home</h3>

```bash

## GET

# Resposta da requisição
[
  {
    "_id": "61b7e5cbb29e004cd1dd740c",
    "title": "Trilha do Docker",
    "description": "Aprofundando em Docker",
    "steps": [
      {
        "referencia": "Curso Livre",
        "avaliacao": 6
      }
    ],
    "technologies": [
      {
        "_id": "61b776d8f9519dc843697bd1",
        "tech": "Docker"
      }
    ],
    "userName": "Xablau",
    "likes": 0
  },
  {
    "_id": "61b7e600b29e004cd1dd740d",
    "title": "JavaScript avançado",
    "description": "Aprofundando em JavaScript",
    "steps": [
      {
        "referencia": "Livro",
        "avaliacao": 10
      }
    ],
    "technologies": [
      {
        "_id": "61b776d8f9519dc843697bd0",
        "tech": "Javascript"
      }
    ],
    "userName": "Xablau",
    "likes": 0
  }
]

```

<h3>/trails</h3>

```bash

## POST

# Corpo da requisição

{
	"title": "Aprofundando em testes",
  "description": "Aplicando testes em javascript",
  "technologies": [
  	{
    	"_id": "61b776d8f9519dc843697bd0",
      "tech": "Javascript"
    }
  ],
  "steps": [
  	{
    	"referencia": "Documentação",
      "avaliacao": 9
		}
	],
  "userName": "Xablau"
}


# Resposta da requisição
{
  "_id": "61b7ef3612b0a3c29f6a37ad",
  "title": "Aprofundando em testes",
  "description": "Aplicando testes em javascript",
  "technologies": [
    {
      "_id": "61b776d8f9519dc843697bd0",
      "tech": "Javascript"
    }
  ],
  "userName": "Xablau",
  "likes": 0
}

```

<h3>/trails:id</h3>

```bash

## GET

# params: id da trilha

> /trails/61b7ef3612b0a3c29f6a37ad

# Resposta da requisição
{
  "_id": "61b7ef3612b0a3c29f6a37ad",
  "title": "Aprofundando em testes",
  "description": "Aplicando testes em javascript",
  "technologies": [
    {
      "_id": "61b776d8f9519dc843697bd0",
      "tech": "Javascript"
    }
  ],
  "userName": "Xablau",
  "likes": 0
}

## PUT

# params: id da trilha

> /trails/61b7ef3612b0a3c29f6a37ad

# Corpo da requisição

{
	"title": "Aprofundando em testes",
  "description": "Aplicando testes em javascript",
  "technologies": [
  	{
    	"_id": "61b776d8f9519dc843697bd0",
      "tech": "Javascript"
    }
  ],
  "steps": [
  	{
    	"referencia": "Curso Livre",
      "avaliacao": 9
		}
	],
  "userName": "Xablau"
}

# Resposta da requisição

{
  "_id": "61b7ef3612b0a3c29f6a37ad",
  "title": "Aprofundando em testes",
  "description": "Aplicando testes em javascript",
  "technologies": [
    {
      "_id": "61b776d8f9519dc843697bd0",
      "tech": "Javascript"
    }
  ],
  "userName": "Xablau",
  "likes": 0,
  "steps": [
    {
      "referencia": "Curso Livre",
      "avaliacao": 9
    }
  ]
}

```

<h3>/trails:id</h3>

```bash

## GET

# params: id da tecnologia

> /trails/tech/61b776d8f9519dc843697bd0

# Resposta da requisição
[
  {
    "_id": "61b7e600b29e004cd1dd740d",
    "title": "JavaScript avançado",
    "description": "Aprofundando em JavaScript",
    "steps": [
      {
        "referencia": "Livro",
        "avaliacao": 10
      }
    ],
    "technologies": [
      {
        "_id": "61b776d8f9519dc843697bd0",
        "tech": "Javascript"
      }
    ],
    "userName": "Xablau",
    "likes": 0
  },
  {
    "_id": "61b7e7bdb29e004cd1dd7412",
    "title": "Primeira trilha do javascript",
    "description": "Iniciando estudo em JS",
    "steps": [
      {
        "referencia": "Video",
        "avaliacao": 10
      }
    ],
    "technologies": [
      {
        "_id": "61b776d8f9519dc843697bd0",
        "tech": "Javascript"
      }
    ],
    "userName": "Xablau",
    "likes": 0
  },
  {
    "_id": "61b7ef3612b0a3c29f6a37ad",
    "title": "Aprofundando em testes",
    "description": "Aplicando testes em javascript",
    "technologies": [
      {
        "_id": "61b776d8f9519dc843697bd0",
        "tech": "Javascript"
      }
    ],
    "userName": "Xablau",
    "likes": 0,
    "steps": [
      {
        "referencia": "Curso Livre",
        "avaliacao": 9
      }
    ]
  }
]
```


<h2>:notebook: Instalação</h2>
<h3>Pré-requisitos</h3>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

 **Node**: [Download Node.js](https://nodejs.org/en/download/)

 **Git**: [Download Git](https://git-scm.com/downloads)

 <h3>Rodando a aplicação</h3>

 ```bash
 # Clone este repositório:
$ git clone  <https://github.com/Zeonnatios/hackathon-backend>


# Instale as dependências com:
$ npm install

# Execute a aplicação com:
$ npm start

# O servidor inciará na porta: 3001 - acesse <http://localhost:3001>
```