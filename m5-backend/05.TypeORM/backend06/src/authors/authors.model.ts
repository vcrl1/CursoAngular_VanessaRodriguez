import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:50})
    name: string;

    @Column({length:50})
    email: string;

    
    @Column({type:'text'})
    bio: string;

    @CreateDateColumn({ name: 'created_date' }) 
    createdDate: Date;

    @CreateDateColumn({ name: 'update_date' }) // lo de name:... para darle el formato de BBDD
    updateDate: Date;

  


}