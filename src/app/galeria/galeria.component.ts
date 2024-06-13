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
  deducibles=['Vivienda', 'Salud', 'Educación'];
  informacion(deducible:string)
  {
   alert('Esta es información adicional sobre ' + deducible);
  }
  borrarDeducible(deducible: string)
{
 for(let i=0;i<this.deducibles.length;i++)
 {
 if(deducible==this.deducibles[i])
 {
 this.deducibles.splice(i,1);
 }
 }
}
}
