import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

export interface LoginDTO {
    email: string,
    password: string;
}
@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
        private jwtService: JwtService) { }

    async login(login: LoginDTO) {
        let user = await this.userService.findByEmail(login.email)  //Se crea este métood en user service. 
        if (!user) throw new UnauthorizedException('Credenciales incorrectas') //usuario incorrecto
        if (user.password !== login.password) throw new UnauthorizedException('Credenciales incorrectas') //comprobación contraseña

        let payload = { //contenido que se va a mostrar.
            email: user.email,
            sub: user.id
        }

        let token = await this.jwtService.signAsync(payload) //objeto respuesta que me estoy inventando para luego llamarlo. 
        return { token: token }

    }
}
