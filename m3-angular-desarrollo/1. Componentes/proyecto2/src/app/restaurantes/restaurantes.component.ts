import { Component } from '@angular/core';
import { IRestaurante } from './restaurantes.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {

  restaurante1 : IRestaurante = {
    nombre: 'Marisquería',
    calle: 'Corazón de María 67',
    abierto: true
  }

}
