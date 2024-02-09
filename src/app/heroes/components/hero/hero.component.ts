import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;
  public showBtnChangeHero: boolean = true;
  public showBtnChangeAge: boolean = true;

  get capitalizeName():string{
    return this.name.toUpperCase()
  }

  getHeroDescription():string{
    return (`${this.name} - ${this.age}`);
  }

  changeHero():void{
    this.name = 'Spiderman'
    this.showBtnChangeHero = false
  }

  changeAge():void{
    this.age = 20
    this.showBtnChangeAge = false;
  }


}
