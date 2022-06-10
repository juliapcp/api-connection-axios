const { Router } = require('express');
const {PersonagemController} = require('../controllers/personagem-controller');

const personagem_Controller = new PersonagemController();

const routes = Router();

routes.post('/buscar', personagem_Controller.buscarPersonagem);

module.exports = routes;