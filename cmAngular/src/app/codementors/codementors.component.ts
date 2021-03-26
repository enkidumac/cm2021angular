import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codementors',
  templateUrl: './codementors.component.html',
  styleUrls: ['./codementors.component.css']
})
export class CodementorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.ala();
  }

  ala(){
    alert("ala ma kota");
  }
}
