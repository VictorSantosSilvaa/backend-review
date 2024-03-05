/*
 *Servidor HTTP e API com o express 
 */
//importar o módulo express - antes precisa instalar!
// npm i express

//A ideia agora, é trabalhar com aplicação fullstack


//MVC => Padrão de projeto que separa as responsabilidades em 
//Model VIEW e Controllers

const express = require("express");
const app = express();
//pegando um mod externo! - uma view
const indexView = require("./views/indexView")
const funcionario = require("./views/funcionario");
const produtos = require("./views/produtos");
const admin = require("./views/admin");

//Deixar uma pasta pública para ser acessada externamente
app.use(express.static("public"))
//Aqui vao as rotas (endpoints)
app.get('/student', (req, res, next) => {
    res.send(indexView())
})

app.get('/produtos', (req, res, next) => {
    res.send(produtos())
})

app.get('/funcionario', (req, res, next) => {
    res.send(funcionario())
})

app.get('/admin', (req, res, next) => {
    res.send(admin())
})

app.listen(3001, () => {
    console.log("Servidor no ar com o Express...")
})

/**
 * crie 3 rotas:
 * /produtos
 * /funcionario
 * /admin
 * 
 * Cada rota, tem que mostrar uma tela (view) diferente!
 */