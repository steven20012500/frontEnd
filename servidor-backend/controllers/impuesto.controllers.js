const Impuestos = require('../models/impuestos');
const impuestosController = {};



impuestosController.obtenerImpuestos = async (req, res) => {
    const impuestos = await Impuestos.find();
    res.json(impuestos);
}

impuestosController.addImpuesto = async (req, res) => {
    try {
        const { ingreso, salud, educacion, vestimenta, vivienda, alimentacion, baseImponible, excedente, valorExcedente, IR } = req.body;

        // Verificar que todos los campos requeridos estén presentes
        if (
            ingreso == null || salud == null || educacion == null || vestimenta == null || vivienda == null ||
            alimentacion == null || baseImponible == null || excedente == null ||
            valorExcedente == null || IR == null
        ) {
            console.log(ingreso, salud, educacion, vestimenta, vivienda, alimentacion, baseImponible, excedente, valorExcedente, IR  );

            return res.status(400).json({ message: 'Todos los campos son requeridos' });
        }

        const newImpuesto = new Impuestos({
            user: req.userId, // Asegúrate de que req.userId esté definido
            ingreso,
            salud,
            educacion,
            vestimenta,
            vivienda,
            alimentacion,
            baseImponible,
            excedente,
            valorExcedente,
            IR
        });

        await newImpuesto.save();
        res.status(201).json({ message: 'Impuesto guardado', impuesto: newImpuesto });
        console.log('Impuesto guardado:', newImpuesto);
    } catch (error) {
        console.error('Error al guardar el impuesto:', error);
        res.status(500).send('Error al guardar el impuesto');
    }
}



module.exports = impuestosController;
