import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  value1?: number;
  value2?: number;
  result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  plus(){
   if(this.value1 &&  this.value2){

    this.result = this.value1 + this.value2;

   }
  }

  minus(){
    if(this.value1 &&  this.value2){

      this.result = this.value1 - this.value2;

     }
  }

  multiplic(){
    if(this.value1 &&  this.value2){

      this.result = this.value1 * this.value2;

     }
  }

  division(){
    if(this.value1 &&  this.value2){

      this.result = this.value1 / this.value2;

     }
  }

}
