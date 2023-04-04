const express = require("express");
require("dotenv").config();

const connectToDatabase = require("./src/database/database"); //arquivo de conexão com o banco

const usuario = require("./src/router/usuario.router"); //arquivo de rota do usuario
const auth = require("./src/router/auth.router"); //arquivo de rota de auth
const produto = require("./src/router/produto.router"); //arquivo de rota de produto

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); //conectando ao banco

app.use("/usuario", usuario); //chamando as rotas do usuário
app.use("/auth", auth); //chamando as rotas de auth
app.use("/produto", produto); //chamando as rotas de produto

app.get("/", (req, res) => {
    res.send( {message: "Bem vindo a Pizzaria - Cantinho dos Devs ;)"} );
});

app.listen(port, () => {
    console.log(`Servidor Rodando em http://localhost:${port}`);
});