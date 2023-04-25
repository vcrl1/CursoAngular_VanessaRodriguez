import { IAddress } from "./address.model";
import { IUser } from "./user.model";

let address1: IAddress = {
    idAddress: 1,
    street: "Amaniel,30",
    postalCode: "28019",
    city: "Madrid",
    country: "España"
}
let address2: IAddress = {
    idAddress: 1,
    street: "Venancio Martin, 46",
    postalCode: "28038",
    city: "Sevilla",
    country: "España"
}

let user1: IUser = {
    idUser: 1,
    email: "sara@gmail.com",
    birthday: new Date("2009-03-08"),
    phone: "677700099",
    address: address1
}

console.log(`usuario ${user1.email} vive en ${user1.address.city} de ${user1.address.country}`);

//Cambiamos dirección
user1.address = address2
console.log(`usuario ${user1.email} vive en ${user1.address.city} de ${user1.address.country}`);

let user2: IUser = {
    address: {
        idAddress: 1,
        street: "Constitucion ,30",
        postalCode: "28015",
        city: "Zaragoza",
        country: "España"
    },

    idUser: 2,
    email: "vcrl1@gmail.com",
    birthday: new Date("1994-11-01"),
    phone: "612345689"
}

console.log(`usuario ${user2.email} vive en ${user2.address.city} de ${user2.address.country}`);

