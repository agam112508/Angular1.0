import { Component, EventEmitter, Input, Output, inject, output } from '@angular/core';
import { lugar } from '../modelos/lugar.interface';
import { LugaresService } from '../servicios/lugares.service';

@Component({
  selector: 'app-elemento-lugar',
  standalone: true,
  imports: [],
  templateUrl: './elemento-lugar.component.html',
  styleUrl: './elemento-lugar.component.css'
})
export class ElementoLugarComponent {
  @Input() item!: lugar;
  @Output() cambioItem:EventEmitter<lugar> = new EventEmitter<lugar>();
  

  private lugarService: LugaresService = inject(LugaresService)
marcarVisitado() {
  this.lugarService.marcarVisitado(this.item);
  this.cambioItem.emit(this.item)

}
  
}
