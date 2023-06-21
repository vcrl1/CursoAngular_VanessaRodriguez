import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.model';
import { BaseEntity, Between, ILike, MoreThanOrEqual, Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

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
            return await this.bookRepo.save(book)
        } catch (error) {
            throw new ConflictException('No se ha podido guardar el libro ')
        }
    }


    /*
        {"id":15 ,
        "title": "libro desde Postman EDITADO",
        "isbn": 123456099,
        "price": "49.00",
        "quantity": 20,
        "published": false}
    */

    async update(book: Book) {
        let bookFromDB = await this.bookRepo.findOne({
            where: {
                id: book.id
            }
        })
        if (!bookFromDB) throw new NotFoundException('Libro no encontrado')
        try {
            bookFromDB.price = book.price
            bookFromDB.published = book.published
            bookFromDB.quantity = book.quantity
            bookFromDB.title = book.title
            await this.bookRepo.update(bookFromDB.id, bookFromDB)
            return bookFromDB
        } catch (error) {
            throw new ConflictException('Error actualizando el libro ')
        }
    }

    async deleteById(id: number): Promise<void> {
        let exist = await this.bookRepo.exist({
            where: { id: id }
        });
        if (!exist) throw new NotFoundException('Not found');
        try {
            await this.bookRepo.delete(id);
        } catch (error) {
            throw new ConflictException('No se puede borrar')
        }
    }

    
}
