import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get('id/:id')
    findById(@Param("id", ParseIntPipe) id: number): Promise<User | null> {
        return this.userService.findById(id);
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.userService.create(user);
    }
}
