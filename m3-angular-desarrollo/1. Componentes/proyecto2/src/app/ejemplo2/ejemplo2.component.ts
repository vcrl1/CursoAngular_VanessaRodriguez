import { Component } from '@angular/core';
import { ILaptop } from './laptop.model';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component {
  mensaje: string = "Hola mundo desde ejemplo2";

  ordenador1: ILaptop = {
    fabricante: 'MSI',
    modelo: 'Modern 1316X',
    ram: 32
  }

  ordenador2: ILaptop = {
    fabricante: 'ASUS',
    modelo: 'A55A',
    ram: 16
  }
}
