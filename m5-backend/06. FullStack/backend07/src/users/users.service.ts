import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {


    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
    ) { }

    findById(id: number): Promise<User | null> {
        return this.userRepo.findOne({
            where: {
                id: id
            },
        });
    }

    findByEmail(email: string): Promise<User | null> {
        return this.userRepo.findOne({
            where: {
                email: email
            },
        });
    }

    async create(user: User): Promise<User> {
        try {
            return await this.userRepo.save(user);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('Cant save');
        }
    }
    async update(user: User): Promise<User> {
        let userFromDB = await this.userRepo.findOne({
            where: {
                id: user.id
            }
        });

        if (!userFromDB) throw new NotFoundException('User no encontrado');

        try { //Aquí se podria ir cambiando los datos que quisieramos. 
            userFromDB.username = user.username;
            userFromDB.email = user.email;
            return await this.userRepo.save(userFromDB)
        } catch (error) {
            throw new ConflictException('Error actualizando el libro');
        }
    }


}