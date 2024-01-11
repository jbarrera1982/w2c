import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = 'http://localhost:5242/api/'

   constructor(private http: HttpClient ) {}
  
  listarUsuarios() {
    const endpoint  = this.baseUrl  +"Usuario"
    return this.http.get<any>(endpoint);
  }

  listarTareas(idUsuario: number) {
    const endpoint  = this.baseUrl +"Tarea/" + idUsuario.toString()
    return this.http.get<any>(endpoint);
  }

  
}
