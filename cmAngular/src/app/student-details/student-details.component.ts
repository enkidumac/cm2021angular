import { Student } from './../student';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() student: Student;

  constructor() {
    this.student = new Student("");
  }

  ngOnInit(): void {
  }

}
