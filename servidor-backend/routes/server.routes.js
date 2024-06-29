const {Router} = require('express');
const router = Router();
const user = require('../controllers/user.controllers');

router.post('/registro',user.addUser);
router.post('/login',user.loginUser);
router.get('/usuarios',user.getUsers);

//router.get('/tareas-privadas', user.getTasksPrivadas);
module.exports = router;