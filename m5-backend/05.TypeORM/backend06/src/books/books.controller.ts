import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService) { }

    @Get()
    findAll(): Promise<Book[]> {
        // return this.bookService.findAll(); //Solo trae los datos del libro
        // return this.bookService.findAllWithRelations(); //Trae tb los datos del autor
        return this.bookService.findAllProjections() //Trae los datos concretos que queremos de cada tabla
    }

    @Get('id/:id')
    findById(id: number): Promise<Book | null> {
        return this.bookService.findById(id);
    }

    @Get('title-eq/:title')
    findAllByTitleEquals(@Param("title") title: string): Promise<Book[]> {
        return this.bookService.findAllByTitleEquals(title)
    }

    @Get('title-like/:title')
    findAllByTitleLike(@Param("title") title: string): Promise<Book[]> {
        return this.bookService.findAllByTitleLike(title)
    }

    @Get('price/min/:min/max/:max')
    findAllByPriceBetween(@Param("min") min: number, @Param("max") max: number): Promise<Book[]> {
        return this.bookService.findAllByPriceBetween(min, max)
    }

    @Get('published')
    fndAllByPublishedTrue(): Promise<Book[]> {
        return this.bookService.fndAllByPublishedTrue()
    }

    @Get('quantity/:quantity/price/:price')
    findAllByQuantityAndPrice(@Param("quantity") quantity: number,
        @Param("price") price: number): Promise<Book[]> {
        return this.bookService.findAllByQuantityAndPrice(quantity, price)
    }

    @Get('order-by-price-asc')
    findAllOrderByPriceAsc(): Promise<Book[]> {
        return this.bookService.findAllOrderByPriceAsc()
    }

    @Post()
    async create(@Body() book: Book): Promise<Book> {
        return await this.bookService.create(book)
    }

    @Put()
    async update(@Body() book: Book): Promise<Book> {
        return await this.bookService.create(book)

    }

    @Delete(':id')
    async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.bookService.deleteById(id)
    }

    
}
