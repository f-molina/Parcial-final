var express = require('express');
var router = express.Router();

const imanController = require('../controllers/ImanController');

router.post('/', imanController.store);
router.get('/imanes', imanController.getImanes);
router.get('/buscar/:id', imanController.buscar);
router.delete('/eliminar/:id', imanController.delete);
router.put('/actualizar/:id', imanController.update);

module.exports = router;