import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id:string):void{
    this.onDeleteCharacterById.emit(id)
  }
}
