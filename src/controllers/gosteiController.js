var gosteiModel = require("../models/gosteiModel.js");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log('cheguei no controller')
    var id_filme = req.body.id_filme;
    var id_usuario = req.body.id_usuario;

    // Faça as validações dos valores
    if (id_filme == undefined) {
        res.status(400).send("Seu id filme está undefined!");
    } else if (id_usuario == undefined) {
        res.status(400).send("Seu id usuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo gosteiModel.js
        gosteiModel.cadastrar(id_filme,id_usuario)
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
}

module.exports = {
    cadastrar
}