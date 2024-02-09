import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<p>Counter: {{counter}}</p>
            <button (click)="increaseBy(1)">+1</button>
            <button (click)="reset()">Reset</button>
            <button (click)="increaseBy(-1)">-1</button>`
})

export class CounterComponent {

  private DEFAULT_COUNTER:number = 10;
  public counter:number = this.DEFAULT_COUNTER;

  constructor() { }

  increaseBy(cantidad:number):void{
    this.counter = this.counter + cantidad >= 0 ? this.counter + cantidad : 0
  }

  reset(){
    this.counter = this.DEFAULT_COUNTER;
  }

}
