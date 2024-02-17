import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {id: uuid(), name: 'Krillin', power: 1000},
    {id: uuid(), name: 'goku', power: 9500},
    {id: uuid(), name: 'Vegetta', power: 7500},
  ];

  addCharacter(character:Character):void{
    const newCharacter ={...character, id: uuid()}
    this.characters.push(newCharacter)
  }

  deleteCharacterById(id:string):void{
    const index = this.characters.findIndex((element) => element.id == id)
    this.characters.splice(index, 1)
  }

}
