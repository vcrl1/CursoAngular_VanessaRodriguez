import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService) { }

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
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
    fndAllByPublishedTrue():Promise<Book[]>{
    return this.bookService.fndAllByPublishedTrue()}

    @Get('quantity/:quantity/price/:price')
    findAllByQuantityAndPrice(  @Param("quantity") quantity: number,
                                @Param("price") price: number): Promise<Book[]> {
        return this.bookService.findAllByQuantityAndPrice(quantity, price)
    }


}
