import { Injectable } from '@angular/core';
import { lugar } from '../modelos/lugar.interface';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  lugares: lugar[] = [
    {
      nombre: "Plaza Bolivar De Pereira",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Plaza-bolivar.jpg",
      descripcion: " Se encuentra ubicado en el Eje Cafe.",
      categorias:["cultura"],
      visitado: true
    },
    {
      nombre: "Coveñas",
      imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/204204906.jpg?k=4424a0ac8895c8aa54625136b1ec1f11b8ed357d64ddf37ad8abbe77870c4a6a&o=&hp=1",
      descripcion: "",
      categorias:["Playa"],
      visitado: false

    }
  ]
  constructor() { }

  listarLugares():lugar[]{
    return this.lugares
  }

  agregarLugar(lugar: lugar){
    this.lugares.push(lugar);
  }

  marcarVisitado(lugar: lugar){
    lugar.visitado = true;
  }

}
