import { Component } from '@angular/core';

@Component({
  selector: 'app-piscina',
  templateUrl: './piscina.component.html',
  styleUrls: ['./piscina.component.css']
})
export class PiscinaComponent {
  largoSeleccionado: string = '';

  setLargo(largo: string): void {
    this.largoSeleccionado = largo;
    // Aquí puedes hacer más lógica, como mostrar la descripción correspondiente al largo seleccionado
  }

}
