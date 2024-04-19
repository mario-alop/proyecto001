import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = 'Mario Alonso';
  edad = '52';
  email = 'mario.alop@gmail.com';
  sueldo = [1700, 1600, 1900];
  activo = true;

  esActivo() {
    if (this.activo) {
      return 'Trabajador Activo';
    } else {
      return 'Trabajador Inactivo';
    }
  }

  ultimos3Sueldos() {
    let suma = 0;
    for (let x = 0; x < this.sueldo.length; x++) 
      suma+= this.sueldo[x];
    return suma;
    
  }
}
