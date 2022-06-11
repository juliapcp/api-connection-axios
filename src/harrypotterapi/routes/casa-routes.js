const { Router } = require('express');
const { CasaController } = require('../controllers/casa-controller');

const casa_controller = new CasaController();

const routes = Router();

routes.get('/estudantes/:casa', casa_controller.buscarPersonagensDaCasa);

module.exports = routes;