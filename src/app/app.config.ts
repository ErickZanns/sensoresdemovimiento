import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes'; // Asegúrate de que la ruta es correcta
import { StepCounterComponent } from './components/step-counter/step-counter.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes), // Proporcionar las rutas
    StepCounterComponent
  ],
};
