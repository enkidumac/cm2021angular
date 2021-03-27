import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CodementorsComponent } from './codementors/codementors.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { ListOfStudentsComponent } from './list-of-students/list-of-students.component';
import { StudentViewComponent } from './student-view/student-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CodementorsComponent,
    StudentDetailsComponent,
    CalculatorComponent,
    DirectivesComponent,
    StudentListComponent,
    ListOfStudentsComponent,
    StudentViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
