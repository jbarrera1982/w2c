import { TareasService } from './../services/tareas.service';
import { Component,OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { CommonModule } from '@angular/common';
import { TareaComponent } from '../tarea/tarea.component';

@Component({
  selector: 'app-listausuario',
  standalone: true,
  imports: [CommonModule, TareaComponent],
  templateUrl: './listausuario.component.html',
  styleUrl: './listausuario.component.css'
})
export class ListausuarioComponent implements OnInit{  
  constructor (public http: HttpService, public tareas: TareasService) {}
  ngOnInit(): void {
    this.listarUsuarios();
  }

  //To do crear la interfaz para usuarios
  usuarios:any = [];
  IdUsuario:number = 0;

  listarUsuarios(){
    this.http.listarUsuarios().subscribe(data=> {
      this.usuarios = data;      
    });
  }

  buscarTareas(IdUsuario: number){
    this.IdUsuario = IdUsuario;   
    this.http.listarTareas(IdUsuario).subscribe(data=> {
      this.tareas.tareas = data;
            console.log(data);
    });
  }


}
