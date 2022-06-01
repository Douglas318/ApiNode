const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/pesquisaPerfil/GitHub/:name', controller.pesquisarPerfilGitHub);

module.exports = router;
