import { Injectable } from '@nestjs/common';
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
}
