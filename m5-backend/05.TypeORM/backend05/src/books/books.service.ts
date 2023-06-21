import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.model';
import { BaseEntity, Between, ILike, MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book) private bookRepo: Repository<Book>
    ) { }

    findAll(): Promise<Book[]> {
        //SELECT*FROM books:
        return this.bookRepo.find();
    }

    findById(id: number): Promise<Book | null> {
        //SELECT *FROM books WHERE id=1
        return this.bookRepo.findOne({
            where: { id: id }
        })
    }

    findAllByTitleEquals(title: string): Promise<Book[]> {
        console.log(title);
        return this.bookRepo.find({
            where: { title: title }
        })
    }

    findAllByTitleLike(title: string): Promise<Book[]> {
        return this.bookRepo.find({
            where: { title: ILike(`%${title}%`) }
        })
    }

    findAllByPriceBetween(minPrice: number, maxPrice: number): Promise<Book[]> {
        return this.bookRepo.find({
            where: { price: Between(minPrice, maxPrice) }
        })
    }

    fndAllByPublishedTrue() {
        return this.bookRepo.find({
            where: { published: true }
        })
    }

    findAllByQuantityAndPrice(quantity: number, price: number): Promise<Book[]> {
        return this.bookRepo.find({
            where: { quantity: MoreThanOrEqual(quantity), price: MoreThanOrEqual(price) }
        })

    }

    findAllOrderByPriceAsc(): Promise<Book[]> {
        return this.bookRepo.find({

            //Para bloquear una tabla: lock
            //Para ordenar: order
            order: {
                price: "ASC" //Si cambiamos el ASC por DESC ordena de min a max
            }
        })

    }
    /* {
        Hay que ir cambiando ISBN para que no de error
        Hay que quitar la fecha para que compile y se añada correctamente
            {"id":0 ,
            "title": "libro desde Postman",
            "isbn": 123456006,
            "price": "145.00",
            "quantity": 19,
            "published": false }
            
        Hay que crear un try catch porque se queda pillado el backend    
            */
    async create(book: Book): Promise<Book> {
        try {
          return await  this.bookRepo.save(book)
        } catch (error) {
            throw new ConflictException('No se ha podido guardar el libro ')
        }

    }
}
