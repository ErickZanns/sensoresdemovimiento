import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true, // Agregar esto
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  @Input() value: number = 0;
}
