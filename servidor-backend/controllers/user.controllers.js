const jwt = require('jsonwebtoken');
const User = require('../models/users');
require('fs');

const usersController = {};

usersController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

usersController.addUser = async (req, res) => {
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    try {
        const { cedula, password } = req.body;
        const newUser = new User({ cedula, password });
        await newUser.save();
        const token = jwt.sign({ _id: newUser._id }, accessTokenSecret);  //Aquí usas jwt.sign
        res.status(200).json({ message: 'Usuario guardado', token, user: newUser });
    } catch (error) {
        console.error('Error al guardar usuario:', error);
        res.status(500).json({ message: 'Error interno al guardar usuario' });
    }
}

usersController.loginUser = async (req, res) => {
    const { cedula, password } = req.body;
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    console.log('accessTokenSecret:', accessTokenSecret);
  try {
    const user = await User.findOne({ cedula });
      if (!user) {
          return res.status(401).send("El correo no existe");
      }
      if (user.password !== password) {
          return res.status(401).send("Contraseña incorrecta");
      }
      const token = jwt.sign({ _id: user._id }, accessTokenSecret);
      return res.status(200).json({ token });
  } catch (error) {
      console.error('Error en el login:', error);
      return res.status(500).json({ message: 'Error interno en el servidor' });
  }
}


usersController.getTasks = async (req, res) =>
    {
        res.json([
    {
        _id:1,
        name: 'Tarea1',
        descripcion: 'Descripcion de la tarea 1',
    },
    { 
        _id:2, 
        name:'Tarea2', 
        descripcion:'Informacion tarea2' 
    }, 
    { 
        _id:3, 
        name:'Tarea3', 
        descripcion:'Informacion tarea3' 
    } 
]) 
}

usersController.obtenerCedulaPorId = async (req, res) => {
    try {
        const userId = req.headers['user-id']; // Leer userId desde los encabezados
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json({ cedula: user.cedula });
    } catch (error) {
        console.error('Error al obtener la cédula del usuario:', error);
        res.status(500).send('Error al obtener la cédula del usuario');
    }
};
module.exports = usersController;
