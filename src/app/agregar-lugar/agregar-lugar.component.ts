import { LowerCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { lugar } from '../modelos/lugar.interface';
import { LugaresService } from '../servicios/lugares.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar-lugar',
  standalone: true,
  imports: [LowerCasePipe, FormsModule, RouterLink],
  templateUrl: './agregar-lugar.component.html',
  styleUrl: './agregar-lugar.component.css'
})
export class AgregarLugarComponent {
  categorias: string [] = ["Cultura","Ocio","Playa"];

  private lugarService: LugaresService = inject(LugaresService);
  private router: Router = inject(Router);

  titulo : string = "";
  url_imagen:string = "";
  descripcion : string = "";
  categoria_datos:  boolean [] = [false, true, false];

  agregarLugar(){

    const Lugar: lugar ={
      nombre:this.titulo,
      imagen:this.url_imagen,
      descripcion : this.descripcion,
      categorias: [],
      visitado: false
    };
    
    for (let index = 0; index < this.categoria_datos.length; index++) {
      if (this.categoria_datos[index]) {
        Lugar.categorias.push(this.categorias[index])
      } ;
      
    }

    this.lugarService.agregarLugar(Lugar);
    this.router.navigateByUrl("/");
   
  }

}
