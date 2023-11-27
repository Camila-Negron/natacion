import { Component } from '@angular/core';

@Component({
  selector: 'app-objetivo',
  templateUrl: './objetivo.component.html',
  styleUrls: ['./objetivo.component.css']
})
export class ObjetivoComponent {
  objectives = [
    { name: 'Acabo de empezar', selected: false },
    { name: 'Fitness de por vida', selected: false },
    { name: 'Nadar más rápido', selected: false },
    { name: 'Mejorar la resistencia', selected: false },
    { name: 'Mejorar la técnica', selected: false },
    { name: 'Pérdida de peso', selected: false }
  ];



  // Función para manejar la selección de objetivos.
  toggleObjective(objective: { selected: boolean; }) {
    objective.selected = !objective.selected;
  }

}
