import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-codementors',
  templateUrl: './codementors.component.html',
  styleUrls: ['./codementors.component.css']
})
export class CodementorsComponent implements OnInit {

  @Input() name: string = "";

  constructor() { }

  ngOnInit(): void {
    //this.ala();
  }

  ala(){
    alert("ala ma kota");
  }
}
