
## Opción 1:

npm install -g @angular/cli

Nota: si no funciona probar a abrir el Visual Studio Code como administrador.


## Opción 2:

npm install --save-dev @angular/cli

./node_modules/.bin/ng version



## Nodejs

https://angular.io/guide/versions

nvm list available

nvm install 18.16.0

nvm use 18.16.0

nvm list


## Comandos consola

En Powershell o GitBash o linux o mac:

ls

pwd

cd nombrecarpeta

cd ..

mkdir nuevodirectorio

## Comandos Angular

ng version

ng help
./node_modules/.bin/ng help

Si no encuentra el comando ng entonces hay que poner npx delante:

npx ng version

ng new proyecto1

cd proyecto1

Para ejecutar un proyecto:
ng serve

Para empezar a crear cosas:

ng generate help

ng generate component product-list

## Setup inicial para proyecto angular

Una vez creado el proyecto angular, asegurarse de que aparece
la carpeta ``node_modules``

Si no está:

npm install


## Ejemplo 1

cd m3-angular-desarrollo
cd 1.Componentes

ng new proyecto1

Angular Routing: N
stylesheet: CSS


## Crear nuevo proyecto

Abrir la terminal

cd m3-angular-desarrollo/1.Componentes

ng new proyecto2

cd m3-angular-desarrollo/1.Componentes/proyecto2

ng serve

## Extensiones

Buscar angular

* Angular language service
* Angular snippets
* Angular Schematics


## Pasos

1. Crear proyecto Angular proyecto2: ``ng new proyecto2``
2. Entrar en el proyecto: ``cd proyecto2``
3. Iniciar proyecto: ``ng serve``
4. Parar la aplicación: ``Ctrl C`` o cerrar la terminal con el botón Kill terminal
5. Crear un componente: ``ng generate component ejemplo1``
6. Crear un componente: ``ng generate component ejemplo2``
7. Mostrar componente ejemplo1 en pantalla: 
   1. Borrar todo en ``app.component.html``
   2. ``<app-ejemplo1></app-ejemplo1>``
   3. ``<app-ejemplo2></app-ejemplo2>``
8. Crear una variable mensaje en ejemplo1.component.ts
9. Mostrar variable mensaje en ejemplo1.component.html


## Ejemplo 1: Mostrar producto TypeScript en HTML:

1. Crear una interfaz llamada ``IProduct`` en ejemplo1.component.ts
2. En la clase ejemplo1.component.ts crear un objeto IProduct
3. En ejemplo1.component.html mostrar los atributos del objeto: ``{{product1.title}}``

## Ejemplo 2: Mostrar laptop TypeScript en HTML:

1. Crear un archivo laptop.model.ts
2. Dentro crear una interface ILaptop con export
3. En la clase ejemplo2.component.ts crear varios objetos ILaptop
4. En ejemplo2.component.html mostrar los atributos de cada objeto: ``{{ordenador.title}}``

## Ejemplo 3: Utilizar ngIf para decidir si mostrar un objeto restaurante condicionalmente

1. Crear un nuevo componente restaurantes
2. Crear modelo restaurante en un archivo con una interfaz: que tenga un atributo boolean abierto
3. En el HTML en función del atributo abierto se muestra el restaurante y en caso de ser falso se muestra un mensaje de restaurante cerrado. ``*ngIf=""``


## Ejemplo 4: utilizar ngFor para mostrar un listado de clientes

ng generate component customer-list
ng g c customer-list

1. Crear un nuevo componente customer-list
2. Crear modelo Cliente
3. Crear lista de clientes en el typescript
4. HTML mostrar la lista de clientes con ``*ngFor``


## Ejemplo 5: 

1. Crear un componente saludo
2. En el typescript del componente crear una función saludar() que cargue un texto en una variable vacía que exista en la clase
3. En el HTML crear un botón que llame a la función saludar()
4. En el HTML debe aparecer ngIf la variable si tiene datos.

## Ejemplo 6: Crear módulo donde agrupar varios componentes

## Ejemplo 7: App con módulos