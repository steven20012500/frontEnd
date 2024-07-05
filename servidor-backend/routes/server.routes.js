const {Router} = require('express');
const router = Router();
const user = require('../controllers/user.controllers');
const impuestos = require('../controllers/impuesto.controllers');
const verifyToken = require('../controllers/authMiddleware');
const empleado = require('../controllers/empleados.controllers')

router.post('/registro',user.addUser);
router.post('/login',user.loginUser);
router.get('/usuarios',user.getUsers);
router.post('/ingresarImpuestos',verifyToken, impuestos.addImpuesto);
router.get('/obtenerImpuestos', impuestos.obtenerImpuestos);
router.get('/obtenerCedula', user.obtenerCedulaPorId);
router.post('/agregarEmpleado', empleado.addEmpleado);
router.get('/obtenerEmpleados', empleado.getEmpleados);
//router.get('/tareas-privadas', user.getTasksPrivadas);
module.exports = router;