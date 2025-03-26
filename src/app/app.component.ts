import { Component } from '@angular/core';
import { StepCounterComponent } from './components/step-counter/step-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StepCounterComponent], // Importar el RouterOutlet y el componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
