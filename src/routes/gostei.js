var express = require("express");
var router = express.Router();

var gosteiController = require("../controllers/gosteiController");

//Recebendo os dados do html e direcionando para a função cadastrar de gosteiController.js
router.post("/cadastrar", function (req, res) {
    gosteiController.cadastrar(req, res);
})

module.exports = router;