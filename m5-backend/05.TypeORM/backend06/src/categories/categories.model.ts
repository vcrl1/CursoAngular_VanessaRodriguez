import { Author } from "src/authors/authors.model";
import { Editorial } from "src/editorials/editorials.model";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column({length: 300})
    description: string;

    //nullable true -> indica opcional 
    @Column({nullable: true})
    photo: string;

    @Column({name: 'min_age'})
    minAge: number;

    @CreateDateColumn({name:'created_date'})
    createdDate: Date;

}