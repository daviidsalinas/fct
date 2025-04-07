import { Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';  // Asegúrate de importar tu componente

export const routes: Routes = [
  { path: 'estudiantes', component: StudentsComponent },  // Ruta para el componente de estudiantes
  { path: '', redirectTo: '/estudiantes', pathMatch: 'full' },  // Ruta por defecto
];