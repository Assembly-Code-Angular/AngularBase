import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'add-root',
  template: `
    <button (click)="add()">ADD</button>
    <p>{{n}}</p>
  `,
})
export class AddComponent {
  n : number = 0
  
  add(){
    this.n = this.n + 1
  }
}
