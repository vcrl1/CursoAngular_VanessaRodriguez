import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// no creamos un doc nuevo, es una enumeración para marcar los roles de los usuarios. 
export enum UserRole {
    USER = 'user',
    ADMIN = 'admin'
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 13 })
    userName: string;

    @Column({ unique: true, length: 13 })
    email: string;

    @Column()
    password: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
    role: UserRole

}