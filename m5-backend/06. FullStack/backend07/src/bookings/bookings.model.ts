import { Book } from "src/books/books.model";
import { User } from "src/users/users.model";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;
    //Cuando añadimos una entidad, es una asociación.
    @ManyToOne(() => User)
    @JoinColumn({ name: 'id_user' })
    user: User;

    @ManyToOne(() => Book)
    @JoinColumn({ name: 'id_book' })
    book: Book;

    @Column({ name: 'start_date' })
    startDate: Date;

    @Column({ name: 'finish_date' })
    finishDate: Date;

    //@Colum()
    //alergies: string 


}