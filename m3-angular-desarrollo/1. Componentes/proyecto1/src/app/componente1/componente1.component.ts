import { Component } from '@angular/core';
interface Iproduct {
  id: number;
  title: string;
  price: number;
}
@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  //variables
  mensaje: string = "Hola mundo desde ejemplo 1";
  precio: number = 6;
  //objeto
  product1: Iproduct = {
    id: 1,
    title: 'Berenjenas',
    price: 76
  }

  checkPrice(): string {
    if (this.product1.price >= 100) {
      return 'red'
    } else if (this.product1.price > 50 && this.product1.price < 100) {
      return 'orange'
    } else (this.product1.price < 50)
    {
      return 'green'
    }

  }

}
