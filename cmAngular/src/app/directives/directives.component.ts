import { Colors } from './../colors.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isHungry = true;
  color = Colors.Black;
  constructor() { }

  ngOnInit(): void {
  }

  hungry(){
    this.isHungry = !this.isHungry;
  }

}
