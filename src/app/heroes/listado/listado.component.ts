import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  constructor() { }

  heroes:string[]=['IronMan','SpiderMan','Hulk','Wolverine','Capitán América','Thor','Doctor Strange'];
  borrado:string='';//no se remocmienda indicar que puede ser undefined.
  borrarHeroe():void{
    this.borrado = this.heroes.pop() || '';//si no es string asigna cadena vacia.
  }




}
