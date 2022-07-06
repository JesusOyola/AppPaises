import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
  button {
    margin-right: 5px;
  }
  `
  ]
})
export class PorRegionComponent  {

  regiones: string[] = [ "EU", "EFTA", "CARICOM","PA","AU", "USAN", "EEU", "AL", "ASEAN", "CAIS", "CEFTA", "NAFTA", "SAARC" ];
  regionActiva: string = "";
  paises: Country[]= [];
  hayError: boolean = false;

 

  constructor( private paisService: PaisService) { }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string ){

    if(region === this.regionActiva) return // Esto es para que cuando apreto el mismo boton no se vuelva a cargar de nuevo.

    this.regionActiva = region;
     this.paisService.buscarRegion( region )
     .subscribe( (regiones) =>{
       this.paises = regiones
     })
}
  

}
