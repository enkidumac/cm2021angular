import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  value1: number = 0;
  value2: number = 0;
  result: number = 0;

    constructor() { }

  ngOnInit(): void {
  }

  plus(){
    this.result = this.value1 + this.value2;
  }

}
