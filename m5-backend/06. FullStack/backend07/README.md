
# Backend con NestJS + TypeORM

Módulo Books:
* nest generate module books
* nest generate controller books
* nest generate service books
* Crear books.model.ts o books.entity.ts


Módulo Database: 
* nest generate module database


Módulo Authors:
* nest generate module authors
* nest generate controller authors
* nest generate service authors
* Crear authors.model.ts o authors.entity.ts

Módulo Editorial:
* nest generate module editorials
* nest generate controller editorials
* nest generate service editorials
* Crear editorials.model.ts o editorials.entity.ts

Módulo locations:
* nest generate module locations
* nest generate controller locations
* nest generate service locations
* Crear locations.model.ts o locations.entity.ts

Módulo categories:
* nest generate module categories
* nest generate controller categories
* nest generate service categories
* Crear categories.model.ts o locations.entity.ts

Módulo Users:
* nest generate module users
* nest generate controller users
* nest generate service users
* Modelo User y Rol

Módulo Reserva:
* nest generate module bookings
* nest generate controller bookings
* nest generate service bookings
* Modelo reserva

Asociaciones:
* ManyToOne Book - Author
* ManyToOne Book - Editorial
* OneToOne Author - Location
* ManyToMany Book - Category
* ManyToOne Reserva - User
* ManyToOne Reserva - Book


# Autenticación

npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt

nest generate module auth

nest generate service auth

nest generate controller auth

1. AuthService
    * register
    * login: si todo ok se firma con una clave secreta
    * validateUserFromPayload

2. AuthModule:
    * ajustar imports: UsersModule, PassportModule, JwtModule
    * ajustar providers: AuthService, JwtStrategy

3. JwtStrategy extends PassportStrategy
    * utiliza la clave secreta para comprobar el token

4. JwtAuthGuard extends AuthGuard

5. @JwtAuthGuard en los métodos de los controladores
    * Explorar activar seguridad global

6. DTOs: Data Transfer Objects 