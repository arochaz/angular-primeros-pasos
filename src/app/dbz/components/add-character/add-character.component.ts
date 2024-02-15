import { Component, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //EventEmitter puede emitir todo tipo de datos, string numeros etc por eso lo ponemos entre <>,
  // ya que cuando un dato es generico se pone entre <>
  // el output lo utilizamos para que nuestro main page html pueda tomar nuestro oneNewcharacter

  @Output()
  public onNewCharacter: EventEmitter <Character> = new EventEmitter();

  public character: Character = {

    name: '',
    power: 0

  };
  //si el lenght es = a 0 no retornamos nada,  si tiene nombre llamamos al Eventemitter
  // si tiene nombre llamamos al Eventemitter que en este caso le pusimos como nombre oneNewCharacter
  emitCharacter():void {

    if ( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}
