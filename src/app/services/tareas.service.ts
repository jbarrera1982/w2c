import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  tareas:any = [];
  currentTarea: any;
  
}
