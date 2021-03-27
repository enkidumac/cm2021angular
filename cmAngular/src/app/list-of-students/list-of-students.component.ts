import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.css']
})
export class ListOfStudentsComponent implements OnInit {

  students: Student[] = [
    new Student("Sylwia"),
    new Student("Łukasz"),
    new Student("Paweł"),
    new Student("Tomek"),
    new Student("Wojtek"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
