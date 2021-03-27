import { Student } from './../models/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.css']
})
export class ListOfStudentsComponent implements OnInit {

  students?: Student[];

  selectStudent?: Student;

  constructor() {
    this.students = [
    new Student("Sylwia"),
    new Student("Łukasz"),
    new Student("Paweł"),
    new Student("Tomek"),
    new Student("Wojtek"),
  ];}

  ngOnInit(): void {
  }

  selectedStudentFunc(student:Student){
    this.selectStudent = student;
  }
}
