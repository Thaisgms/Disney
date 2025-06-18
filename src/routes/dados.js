var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

//Recebendo os dados do html e direcionando para a função cadastrar de gosteiController.js
router.get("/buscar", function (req, res) {
    dadosController.buscar(req, res);
})

router.get("/buscarPizza", function (req, res) {
    dadosController.buscarPizza(req, res);
})

router.get("/kpi1", function (req, res) {
    dadosController.kpi1(req, res);
})

router.get("/kpi2", function (req, res) {
    dadosController.kpi2(req, res);
})

router.get("/kpi3", function (req, res) {
    dadosController.kpi3(req, res);
})
module.exports = router;