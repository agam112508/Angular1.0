import { Routes } from '@angular/router';
import { ListaLugaresComponent } from './lista-lugares/lista-lugares.component';
import { AgregarLugarComponent } from './agregar-lugar/agregar-lugar.component';

export const routes: Routes = [

    {
        path: '',
        component:ListaLugaresComponent
    },
    {
        path:"agregar",
        component: AgregarLugarComponent
    }

];
