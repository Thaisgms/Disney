var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log('cheguei no controller')
    var genero = req.body.filme_atualServer;
    var idUsuario = req.body.usuarioServer;

    // Passe os valores como parâmetro e vá para o arquivo gosteiModel.js
    quizModel.cadastrar(genero, idUsuario)
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
    cadastrar
}