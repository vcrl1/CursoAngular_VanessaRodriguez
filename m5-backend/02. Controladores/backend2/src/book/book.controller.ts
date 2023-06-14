import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { IBook } from './book.model';
import { log } from 'console';
import { NotFoundError } from 'rxjs';

@Controller('books')
export class BookController {

    //http://localhost:3000/books
    @Get() // si fuera @Get(id) la url sería el controller y lo del get: http://localhost:3000/books/id
    findAll(): IBook[] {
        let book1: IBook = {
            id: 1,
            title: 'Libro 1',
            price: 15
        };
        let book2: IBook = {
            id: 2,
            title: 'Libro 2',
            price: 18
        };
        return [book1, book2];
    }

    //http://localhost:3000/books/1
    // @Get(':id')
    // findById(@Param ('id') id: string): IBook {
    //     console.log(typeof(id)); //string

    //     let book1: IBook = {
    //         id: parseInt(id,10),
    //         title: 'Libro 1',
    //         price: 15
    //     };

    //     console.log(typeof(id)); //number
    //     return book1
    // }

    //Otra manera para pasar a número el ID, que por defecto aparece como string.  http://localhost:3000/books/1
    @Get(':id')
    findById2(@Param('id', ParseIntPipe) id: number): IBook {
        console.log(typeof (id)); //number
        return {
            id: 2,
            title: 'Libro 1',
            price: 15
        }
    }


    // Para CREAR UN LOGIN. http://localhost:3000/books
    @Post()
    create(@Body() book: IBook): IBook {
        //Guardar en base de datos 
        book.id = 1;
        return book;
    }

    //Actualizar Put http://localhost:3000/books
    @Put()
    update(@Body() book: IBook): IBook {
        //Buscar y comprobar si existe el libro
        // let bookFromBD=this.bookService.findById(book.id)
        if (false)
            throw new NotFoundException('Book not found')
        //Actualizar en base de datos el libro encontrado 
        return book;
    }

    //Borrar http://localhost:3000/books
    @Delete(':id')
    deleteById(@Param('id', ParseIntPipe) id: number) {
        if (false)
            throw new NotFoundException('Book not found')
        //Borrar libro de base de datos
        try{
        // this.bookService.deleteById(id)
        } catch (error){
            throw new NotFoundException('No se puede borrar el libro')

        }
        
    }

}
