import { Component, OnInit, inject } from '@angular/core';
import { ElementoLugarComponent } from '../elemento-lugar/elemento-lugar.component';
import { lugar } from '../modelos/lugar.interface';
import { NgFor } from '@angular/common';
import { LugaresService } from '../servicios/lugares.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-lugares',
  standalone: true,
  imports: [ElementoLugarComponent, NgFor, RouterLink],
  templateUrl: './lista-lugares.component.html',
  styleUrl: './lista-lugares.component.css'
})
export class ListaLugaresComponent implements OnInit{

  private lugaresService: LugaresService= inject(LugaresService)
  
  lugares: lugar[] =[];

  ngOnInit(): void {
    this.lugares = this.lugaresService.listarLugares();
  }
  
  
}
