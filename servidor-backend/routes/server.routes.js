const {Router} = require('express');
const router = Router();
const user = require('../controllers/user.controllers');
const impuestos = require('../controllers/impuesto.controllers');
const verifyToken = require('../controllers/authMiddleware');

router.post('/registro',user.addUser);
router.post('/login',user.loginUser);
router.get('/usuarios',user.getUsers);
router.post('/ingresarImpuestos',verifyToken, impuestos.addImpuesto);
router.get('/obtenerImpuestos', impuestos.obtenerImpuestos);
router.get('/obtenerCedula', user.obtenerCedulaPorId);
//router.get('/tareas-privadas', user.getTasksPrivadas);
module.exports = router;