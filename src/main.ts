import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { StudentsComponent } from './app/components/students/students.component';
import { TeachersComponent } from './app/components/teachers/teachers.component';
import { HomeComponent } from './app/components/home/home.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'teachers', component: TeachersComponent }
    ])
  ]
});