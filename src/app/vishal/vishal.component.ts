import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vishal',
  template: `
  <input [(ngModel)]="name2" type="text"/>
  {{name2}}

  <h2>Welcome {{name}}</h2>
  <h2 class="text-success">Code evolution</h2>
  <h2 [class]="successClass">Code evolution</h2>
  <h2 [class.text-danger]="hasError">Code evolution</h2>
  <h2 [ngClass]="messageClasses">Code evolution</h2>
  <h2 [style.color]="hasError?'red':'green'">Code evolution</h2>
  <h2 [ngStyle]="titleStyles">Code evolution</h2>
  <button (click)="onClick($event)"></button>
  {{greeting}}
  <input #myInput type="text"/>
  <button (click)="logMessages(myInput.value)"></button>
  `,
  styles: [`
  .text-success {
    color: red;
  }
  .text-danger {
    color: green
  }
  .text-special {
    font-style: italic;
  }
    `]
})
export class VishalComponent implements OnInit {

  public name2 = "";
  public name = "vishal";
  public successClass = "text-special";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-special": this.isSpecial,
    "text-danger": !this.hasError,
    "text-success": this.hasError

  }
  public titleStyles = {
    color: 'yellow',
    fontStyle: 'italic'
  }
  public greeting = ""

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
    this.greeting = "Welcome to Code Evolution"
  }

  logMessages(value) {
    console.log(value)
  }

}
