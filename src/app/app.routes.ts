import { Routes } from '@angular/router';
import { ListausuarioComponent } from './listausuario/listausuario.component';
import { DetalletareaComponent } from './detalletarea/detalletarea.component';

export const routes: Routes = [
    {path: '', component: ListausuarioComponent},  
    {path: 'tarea/:Id', component: DetalletareaComponent} 
];
