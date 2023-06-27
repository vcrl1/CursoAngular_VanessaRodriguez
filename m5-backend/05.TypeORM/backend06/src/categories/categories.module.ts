import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category } from './categories.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Category])], //Tabla Categorías
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
