export class Empleados {
    constructor(_id='', nombre = '' , cargo = '' , departamento = '' , sueldo = 0){
        this._id = _id;
        this.nombre = nombre;
        this.cargo = cargo;
        this.departamento = departamento;
        this.sueldo = sueldo;
    }
    _id: string;
    nombre: string;
    cargo: string;
    departamento : string;
    sueldo : number;
}


