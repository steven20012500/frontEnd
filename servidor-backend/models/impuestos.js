
const {Schema, model} = require('mongoose');

const impuestoSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    ingreso: {type: Number, required: true},
    salud: {type: Number, required: true},
    educacion: {type: Number, required: true},
    vestimenta: {type: Number, required: true},
    vivienda: {type: Number, required: true},
    alimentacion: {type: Number, required: true},
    baseImponible: {type: Number, required: true},
    excedente: {type: Number, required: true},
    valorExcedente: {type: Number, required: true},
    IR: {type: Number, required: true}
    }, {
        timestamps: true
    });
module.exports = model('Impuesto', impuestoSchema);

