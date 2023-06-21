# Nest con TypeORM

npx nest new backend05 --skip-git --package-manager npm

cd backend05

npm install --save @nestjs/typeorm typeorm mysql2

Módulo Books:
npx nest generate module books
npx nest generate controller books
npx nest generate service books
Crear books.model.ts o books.entity.ts

Módulo base de datos:
npx nest generate module database

Módulo Authors:
npx nest generate module authors
npx nest generate controller authors
npx nest generate service authors
Crear authors.model.ts o authors.entity.ts
