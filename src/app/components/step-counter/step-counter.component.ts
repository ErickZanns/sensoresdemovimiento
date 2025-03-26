import { Component } from '@angular/core';

@Component({
  selector: 'app-step-counter',
  templateUrl: './step-counter.component.html',
  styleUrls: ['./step-counter.component.css']
})
export class StepCounterComponent {
  steps: number = 0; // Número de pasos
  goal: number = 10000; // Meta diaria
  progressPercentage: number = 0; // Porcentaje de progreso

  // Calcular calorías y distancia
  get calories(): number {
    return Math.round(this.steps * 0.04);
  }

  get distance(): number {
    return (this.steps * 0.0008);
  }

  // Simular incremento de pasos y progreso (esto puedes modificarlo según la lógica de tu app)
  incrementSteps() {
    this.steps++;
    this.progressPercentage = Math.min((this.steps / this.goal) * 100, 100);
  }
}
