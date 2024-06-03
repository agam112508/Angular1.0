import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaLugaresComponent} from './lista-lugares/lista-lugares.component';
import { AgregarLugarComponent } from './agregar-lugar/agregar-lugar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
