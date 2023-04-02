const express = require("express");
const connectToDatabase = require("./src/database/database"); //arquivo de conexão com o banco

const usuario = require("./src/router/usuario.router"); //arquivo de rota do usuario

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); //conectando ao banco

app.use("/usuario", usuario); //chamando as rotas do usuário

app.get("/", (req, res) => {
    res.send( {message: "Bem vindo a Pizzaria - Cantinho dos Devs ;)"} );
});

app.listen(port, () => {
    console.log(`Servidor Rodando em http://localhost:${port}`);
});