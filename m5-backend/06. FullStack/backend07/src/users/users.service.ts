import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>) { }
    findById(id: number): Promise<User | null> {
        // SELECT * FROM Users WHERE id = 1;
        console.log(id);
        return this.userRepo.findOne({
            where: {
                id: id
            }
        });
    }

    async create(user: User): Promise<User> {
        try {
            return await this.userRepo.save(user);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('No se ha podido guardar el libro.');
        }
    }


}
