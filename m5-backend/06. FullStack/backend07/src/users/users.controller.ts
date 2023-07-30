import { Body, Controller, UseGuards, Request, Delete, Get, Param, ParseIntPipe, Post, Put, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import { AuthGuard } from '@nestjs/passport';
import { UserRole } from './user-role.enum';


@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}


    @UseGuards(AuthGuard('jwt'))
    @Get('current')
    findCurrentUser(@Request() request): Promise<User> {
        return request.user;
    }

    @UseGuards(AuthGuard('jwt'))
    @Put()
    async update(@Request() request, @Body() user: User): Promise<User> {

        // si el id de request.user.id no coincide con user.id
        if (request.user.id !== user.id && 
            request.user.role !== UserRole.ADMIN)
            throw new UnauthorizedException('No se puede editar');

        return await this.userService.update(user);
        // TODO: en caso de actualizar datos que están en el token JWT será necesario
        // crear un nuevo token JWT y devolverlo para que se actualice en frontend
    }

    
}