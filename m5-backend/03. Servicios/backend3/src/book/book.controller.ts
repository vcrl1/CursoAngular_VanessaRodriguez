import { BadRequestException, Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { IBook } from './book.model';

@Controller('books')
export class BookController {

    constructor(private bookService: BookService) { }

    @Get()
    findAll(): IBook[] {
        return this.bookService.findAll()

    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): IBook {
        let book = this.bookService.findById(id)
        if (!book)
            throw new NotFoundException('Book not found')

        return book
    }

    @Post()
    create(@Body() book: IBook): IBook {
        return this.bookService.save(book)
    }

    @Put()
    update(@Body() book: IBook): IBook {
        return this.bookService.update(book)
    }

    @Delete(':id')
    @HttpCode(204)
    deleteById(@Param('id', ParseIntPipe) id: number) {
        this.bookService.deleteById(id)
    }
    //findByTitleContains
    @Get(':title/:title')
    findByTitleContains(@Param('title') title: string): IBook[] {
        if (title.length === 0)
            throw new BadRequestException('Título no puede estar vacío')
        return this.bookService.findByAllTitleContains(title)
    }

    @Delete()
    @HttpCode(204)
    deleteAll() {
        //this.bookService.removeRelationships()
        this.bookService.deleteAll()
    }



}
