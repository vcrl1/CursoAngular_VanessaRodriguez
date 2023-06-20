# Para iniciar un proyecto nuevo con NESTJS/CLI
npx nest new backend --skip-git --package-manager npm
#
npx nest generate module books
npx nest generate module author

npx nest generate controller books
npx nest generate controller authors

npx nest generate service books
npx nest generate service authors

# Ejecutar proyecto 
npm run start:dev


# Objetivos: 
* Crear nuevos métodos en controladores
* Crear nuevos controladores
* Pruebas con Postman