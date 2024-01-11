import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TareasService } from '../services/tareas.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-detalletarea',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './detalletarea.component.html',
  styleUrl: './detalletarea.component.css'
})
export class DetalletareaComponent{

  constructor (public http: HttpService, public tareas: TareasService) {}

   GuardarCambios(){
    // this.http.listarTareas(IdUsuario).subscribe(data=> {
    //   this.tareas.tareas = data;
    //         console.log(data);
    // });
  }

}

