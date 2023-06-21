import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './authors.model';

@Module({
  imports: [TypeOrmModule.forFeature([Author])], //Tabla Author 
  controllers: [AuthorsController],
  providers: [AuthorsService]
})
export class AuthorsModule { }
