var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os quiz do html e direcionando para a função cadastrar de gosteiController.js
router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
})

module.exports = router;