
# Nest con TypeORM

nest new backend05 --skip-git --package-manager npm

cd backend05

npm install --save @nestjs/typeorm typeorm mysql2

Módulo base de datos:

* nest generate module database
* Añadir la configuración MySQL
* Crear base de datos backend_nest desde MySQL Workbench

Módulo Books:
* nest generate module books
* nest generate controller books
* nest generate service books

Pasos manuales: 

* Crear books.model.ts o books.entity.ts

* Dentro de books.model.ts añadir las columnas necesarias con anotaciones/decoradores: @Entity, @Column

* books.module.ts agregar:
imports: [TypeOrmModule.forFeature([Book])],

* books.service.ts



