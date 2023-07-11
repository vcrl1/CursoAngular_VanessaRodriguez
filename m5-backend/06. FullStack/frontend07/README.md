# Frontend con Angular
ng generate component layout/navbar
ng generate component layout/footer
ng generate module books --routing --module app.module
ng generate component books/book-list
ng generate component books/book-gallery
ng generate component books/book-detail
ng generate component books/book-form
ng generate interface books/models/book --type=model --prefix=I
ng generate service books/services/book
ng generate module shared
ng generate pipe shared/LimitLongText
Importar SharedModule en BookModule
ng generate module authors --routing --module app.module
ng generate interface authors/models/author --type=model --prefix=I
ng generate service authors/services/author
ng generate module categories --routing --module app.module
ng generate interface categories/models/category --type=model --prefix=I
ng generate service categories/services/category
ng generate component authors/author-detail
## Autenticación
Módulo auth:
* ng generate module auth --routing --module app.module
* ng generate service auth/auth
* ng generate component auth/login
* ng generate component auth/register
* Crear JwtInterceptor
Módulo users:
* ng generate module users --routing --module app.module
* ng generate interface users/user --type=model --prefix=I
* ng generate service users/user
* ng generate component users/profile
## Login 
* Crear método login en AuthService
* Crear componente auth/login
* Añadir formulario reactivo en login.component.ts y login.component.html
* En el método save() de login.component.ts llamar a AuthService login y comprobar que se recibe el token como respuesta.

* Almacenar el token en localStorage.

En Postman:

* Authorization tiene que estar a No Auth

Una vez hecho el login, el resto de peticiones a otros controladores:

* Authorization tiene que estar a Bearer token

## Utilizar token en cabecera Authorization en las peticiones al backend

ng generate interceptor auth/jwt
Crear JwtInterceptor implements HttpInterceptor
Tiene un método intercept que hay que rellenar con código para extraer el token y agregarlo en la cabecera Authorization de la request.
auth.module.ts en providers agregar el JwtInterceptor, con multi:true.
Lo que se debe comprobar es que cuando se lanza una nueva petición, por ejemplo listado books, en la consola Network, en cabeceras de la petición aparece Authorization Bearer token.
## Registro
ng generate component auth/register
register.component.ts:
* crear el userForm
* crear el método save() que llame a register de AuthService
register.component.html:
* username
* email
* password
## Cerrar sesión o logout
* Añadir botón logout en barra de navegación
* Crear método logout en AuthService
## Personalizar vistas en base a si se está autenticado
Crear método isLoggedIn() en AuthService para comprobar si existe token.
Agregar public authService: AuthService en navbar.component.ts
Ya podemos añadir ngIf="authService.logout" o ngIf="authService.isLoggedIn()"

## Personalizar vistas en base a roles

Instalar jwt-decode: https://github.com/auth0/jwt-decode

npm install jwt-decode

En AuthService crear métodos para comprobar roles, para lo cual deben descodificar el token jwt utilizando el método jwt_decode()

isAdmin()
isCompany()

Cosas que solo puede ver el administrador:

* En la barra de navegación puede haber un menú libros con un botón Crear libro
* En la barra de navegación menú usuarios
* En el listado libros el botón Crear libro


## Convertir el identificador jwt_token en una constante 

## Proteger rutas

## Subida de imágenes 

## Conectar con otros backend desde nuestro backend con httpclient