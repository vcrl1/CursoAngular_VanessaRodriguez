import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { IBook } from './book.model';
import { log } from 'console';

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
        book.id = 1;
        return book;
    }

    

}
