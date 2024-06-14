import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
 export class GaleriaComponent implements OnInit{
  constructor(){}
  ngOnInit(): void{
  }
  public deducibles = [
    {
      "gasto": "Vivienda",
      "descripcion": "Pago mensual del alquiler o hipoteca.",
      "informacionAdicional": "gastos de mantenimiento y reparaciones.",
      "imagen": "/assets/vivienda.jpg"
    },
    {
      "gasto": "Salud",
      "descripcion": "Gastos médicos y seguros de salud.",
      "informacionAdicional": "cobertura de medicamentos y consultas médicas.",
      "imagen": "/assets/salud.jpg"
    },
    {
      "gasto": "Educación",
      "descripcion": "Gastos de matrícula y materiales educativos.",
      "informacionAdicional": "cursos y actividades extracurriculares.",
      "imagen": "/assets/educacion.jpg"
    },
    {
      "gasto": "Transporte",
      "descripcion": "Gastos en transporte público y combustible.",
      "informacionAdicional": "mantenimiento del vehículo.",
      "imagen": "/assets/transporte.jpg"
    },
    {
      "gasto": "Alimentación",
      "descripcion": "Gastos en alimentos y bebidas.",
      "informacionAdicional": "compras en supermercados y restaurantes.",
      "imagen": "/assets/alimentacion.jpg"
    }
  ];
  getDeducibles() {
    return this.deducibles.map(deducibles => deducibles.gasto);
  }

  getDescripciones() {
    return this.deducibles.map(deducibles => deducibles.descripcion);
  }

  getInformacionesAdicionales() {
    return this.deducibles.map(deducibles => deducibles.informacionAdicional);
  }

  getImagenes() {
    return this.deducibles.map(deducibles => deducibles.imagen);
  }
  //deducibles=['Vivienda', 'Salud', 'Educación'];
  informacion(deducible:string)
  {
   alert('Esta es información adicional sobre ' + deducible);
  }
  borrarDeducible(deducible: any): void {
    this.deducibles = this.deducibles.filter(d => d !== deducible);
  }
}
