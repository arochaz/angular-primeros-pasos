import { Component } from "@angular/core";

@Component({
    selector : 'app-counnter',
    template: ` segundo contador , para poner todo el codigo hay que encerrarlo en las comillas en diagonal

    <h3>Counter : {{ counter}} </h3>
  <!-- se usa el () para llamar al metodo  -->  


  <button (click)="incrementar(+1)">+1</button>
  <button (click)="resetContador()"> Reset </button>
  <button (click)="incrementar(-1)">-1</button>

  `

})

export class CounterComponent{

  public counter : number = 10;


  incrementar(value : number ):void {
    this.counter += value ;
  }
 
  resetContador (){

    this.counter = 10;
  }



}