const express = require('express');
const app = express.Router();
const controller = require('../controller/controller');

app.get('/pesquisaPerfil/GitHub/:name', controller.pesquisarPerfilGitHub);

module.exports = router;
