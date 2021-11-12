import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calc';

  num1!: string;
  num2!: string;
  num3!: number;
  num4!: number;
  num5!: number;
  num6!: number;


  add(){
    this.num3 = parseInt(this.num1) + parseInt(this.num2);
  }
  sub(){
    this.num4 = parseInt(this.num1) - parseInt(this.num2);
  }
  mul(){
    this.num5 = parseInt(this.num1) * parseInt(this.num2);
  }
  div(){
    this.num6 = parseInt(this.num1) / parseInt(this.num2);
  }

  


}
