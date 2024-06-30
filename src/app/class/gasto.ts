export class Gasto {
    constructor(_id='',user= '',cedula= '', ingreso = 0, salud= 0, educacion= 0, vestimenta= 0, vivienda= 0, alimentacion= 0, baseImponible= 0, excedente= 0, valorExcedente= 0, IR= 0)
    {
    this._id = _id;
    this.user = user;
    this.cedula = cedula;
     this.ingreso = ingreso;
     this.salud = salud;
     this.educacion = educacion;
     this.vestimenta = vestimenta;
     this.vivienda = vivienda;
     this.alimentacion = alimentacion;
     this.baseImponible = baseImponible;
     this.excedente = excedente;
     this.valorExcedente = valorExcedente;
     this.IR = IR;
   }
    _id: string;
    user: string;
    cedula: string;
   ingreso: number;
   salud: number;
   educacion: number;
   vestimenta: number;
    vivienda: number;
    alimentacion: number;
    baseImponible: number;
    excedente: number;
    valorExcedente: number;
    IR: number
}
