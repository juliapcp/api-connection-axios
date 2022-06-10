const { Router } = require('express');
const PersonagemController = require('../controllers/personagem-controller');

const routes = Router();

const personagemController = new PersonagemController();

routes.get('/buscar', personagemController.login);

module.exports = routes;