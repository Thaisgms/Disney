var dadosModel = require("../models/dadosModel");

function buscar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log('cheguei no controller')

    // Passe os valores como parâmetro e vá para o arquivo gosteiModel.js
    dadosModel.buscar()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarPizza(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log('cheguei no controller')


    // Passe os valores como parâmetro e vá para o arquivo gosteiModel.js
    dadosModel.buscarPizza()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function kpi1(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log('cheguei no controller')


    // Passe os valores como parâmetro e vá para o arquivo gosteiModel.js
    dadosModel.kpi1()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function kpi2(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log('cheguei no controller')


    // Passe os valores como parâmetro e vá para o arquivo gosteiModel.js
    dadosModel.kpi2()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function kpi3(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log('cheguei no controller')


    // Passe os valores como parâmetro e vá para o arquivo gosteiModel.js
    dadosModel.kpi3()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    buscar,
    buscarPizza,
    kpi1,
    kpi2,
    kpi3
}