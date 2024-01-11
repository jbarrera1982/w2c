import { Component, Input, OnChanges } from '@angular/core';
import { HttpService } from '../services/http.service';
import { CommonModule } from '@angular/common';
import { TareasService } from '../services/tareas.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tarea', 
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent{
   constructor (public http: HttpService, public tareas: TareasService) {}  

  setearTarea(tarea: any)
  {
    this.tareas.currentTarea =  tarea;
    console.log(tarea);
  }


}
