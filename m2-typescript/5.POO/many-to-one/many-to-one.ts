import { IProducts } from "./product.model";
import { ISupermarket } from "./supermarket.model";

let mercadona: ISupermarket = {
    idSupermarket: 1,
    brandName: "Mercadona",
    m2: 400,
    numEmployees: 4000,
    products: []
}

let yogures: IProducts = {
    idProduct: 1,
    title: "Yogures sabor kiwi",
    price: 4.99,
    quantity: 100,
    supermarket: mercadona
}
let pan: IProducts = {
    idProduct: 2,
    title: "Pan con pasas",
    price: 1.99,
    quantity: 50,
    supermarket: mercadona
}

//Completar asociación bidireccional 
//Desde un producto puedo acceder al supermercado.
//Desde un supermercardo puedo acceder a los productos

mercadona.products.push(yogures)
mercadona.products.push(pan)
//console.log(mercadona);

//Crear otro supermercado esta vez pasando los productos directamente

let alimerka: ISupermarket = {
    idSupermarket: 2,
    brandName: "Alimerka",
    m2: 300,
    numEmployees: 1500,
    products: [
        {
            idProduct: 3,
            title: "Manzanas golden",
            price: 2,
            quantity: 200,
        },
        {
            idProduct: 4,
            title: "Naranjas de Valencia",
            price: 1.5,
            quantity: 150,
        }
    ]
}
// console.log(alimerka);


//Asignar supermercado Alimerka a los productos dentro de alimerka con for 
for (const products of alimerka.products) {
    products.supermarket = alimerka
}

// console.log(alimerka);

//forEach

alimerka.products.forEach(products => products.supermarket=alimerka)
console.log(alimerka);
