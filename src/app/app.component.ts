import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Para la navegación por rutas
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,  // Indica que es un componente standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, CommonModule],  // Importa RouterOutlet para las rutas
})
export class AppComponent {
  title = 'fct-web';
}
