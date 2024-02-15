import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {


  // al poner el @Input sobre  public characterList
  //estoy diciendole a mi ListComponent que puede recibir una propiedad llamada characterlist
  // puedo darle el nombre que yo quiera en el en este caso le di el nombre('lista')
  // trunks es el valor por defecto , pero al llamar a Character le pasamos los nombres goku vegeta krilin
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter( id?: string ):void {

    if ( !id ) return;
    this.onDelete.emit( id );
  }
}
