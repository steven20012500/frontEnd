const jwt = require('jsonwebtoken');
const Empleado = require ('../models/empleados');
require('fs');

const empleadosController = {};

empleadosController.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
}


empleadosController.addEmpleado = async (req, res) => {
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    try {
        const { nombre, cargo, departamento, sueldo } = req.body;
        const newEmpleado = new Empleado({ nombre, cargo, departamento, sueldo });
        await newEmpleado.save();
        const token = jwt.sign({ _id: newEmpleado._id }, accessTokenSecret);  //Aquí usas jwt.sign
        res.status(200).json({ message: 'Empleado guardado', token, empleados: newEmpleado });
    } catch (error) {
        console.error('Error al guardar empleado:', error);
        res.status(500).json({ message: 'Error interno al guardar empleado' });
    }
}

empleadosController.deleteEmpleado = async (req, res) => {
    try {
        await Empleado.findByIdAndDelete(req.params.id);
        res.json({ message: 'Empleado eliminado' });
    } catch (error) {
        console.error('Error al eliminar empleado:', error);
        res.status(500).json({ message: 'Error interno al eliminar empleado' });
    }
}

module.exports = empleadosController;


