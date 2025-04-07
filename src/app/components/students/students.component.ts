import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // Asegúrate de importar esto
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterModule], // Importar RouterModule aquí
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getStudents().subscribe(
      (data) => {
        console.log('Respuesta de la API:', data);
        this.students = data;
      },
      (error) => {
        console.error('Error al obtener los estudiantes:', error);
      }
    );
  }

  editStudent(id: number) {
    console.log('Editar estudiante con ID:', id);
  }

  deleteStudent(id: number) {
    console.log('Eliminar estudiante con ID:', id);
  }
}