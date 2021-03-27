import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  @Input() student?:Student;

  @Output() selectedStudent = new EventEmitter<Student>();

  constructor() { }

  ngOnInit(): void {
  }

  selectStudent() {
    this.selectedStudent.emit(this.student);
  }
}
