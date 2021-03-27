import { Student } from './student';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmAngular';
  name1 = 'Sylwia';
  student = new Student("Łukasz");
}
