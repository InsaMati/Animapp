import { Component, OnInit } from '@angular/core';
import { AnimappService } from '../animapp.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  buscar: string = '';

  busqueda() {
    this.AnimappService.buscarGif(this.buscar);
    this.buscar = '';
  }

  constructor(private AnimappService: AnimappService) {}

  ngOnInit(): void {}
}
