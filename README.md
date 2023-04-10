# Backend-Pizzaria-NodeJs

Sistema de Backend completo em MVC com API Rest e toda interface da documentação em Swagger.

Recursos usados no projeto:

1. HTML5/CSS3/Javascript
2. MongoDB
3. Mongoose
4. Express
5. DBCrypt
6. Json web Token JWT
7. Swagger
8. CORS
9. Padrão MVC (router, middleware, controller, service, model, database)

## Instalação

1. baixe todo o código
2. abra o terminal do VS Code
3. execute npm i
4. rode usando npm run dev

### URLs de acesso

### Métodos

As Requisições para a API devem seguir os padrões:


| Método  | Descrição                                             |
| ---------- | --------------------------------------------------------- |
| `GET`    | Retorna informações de um ou mais registros.          |
| `POST`   | Utilizado para criar um novo registro.                  |
| `PUT`    | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema.                          |

### Respostas

As respostas às Requisições são baseadas nos seguintes códigos de retorno:


| Código | Descrição                                                   |
| --------- | --------------------------------------------------------------- |
| `200`   | Requisição executada com sucesso (success).                 |
| `201`   | Informação cadastrada com sucesso (Created).                |
| `400`   | Requisição inválida (Bad Request).                         |
| `401`   | Erro de Autenticação. Problemas com o Token (Unauthorized). |
| `404`   | Registro pesquisado não encontrado (Not found).              |
| `500`   | Erro interno no Servidor (Internal Server Error).             |


### Autenticação

Para testar a API e gerar o **Token de acesso**, primeiramente crie um ***login*** em **/usuario/create**.


### Endpoints

Todos os endpoints da aplicação serão listados abaixo:


### Dados de Usuário [/usuario]

Endpoints de Usuário


#### /usuario/create

#### /usuario/findById/\{id\}

#### /usuario/findAll

#### /usuario/create

#### /usuario/update/\{id\}

#### /usuario/delete/\{id\}

.

### Produto

### Autor

Crislan Cruz - como projeto final para o Curso de **Backend** da **iTalents**
