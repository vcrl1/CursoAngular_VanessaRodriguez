import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from './DTO/login.dto';
import { TokenDTO } from './DTO/token.dto';
import { User } from 'src/users/users.model';


@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
        private jwtService: JwtService) { }

    async login(login: LoginDTO): Promise<TokenDTO> {
        let user = await this.userService.findByEmail(login.email)  //Se crea este métood en user service. 
        if (!user) throw new UnauthorizedException('Credenciales incorrectas') //usuario incorrecto
        if (user.password !== login.password) throw new UnauthorizedException('Credenciales incorrectas') //comprobación contraseña

        let payload = { //contenido que se va a mostrar.
            email: user.email,
            sub: user.id,
            role: user.role
        }

        let token: TokenDTO = {
            token: await this.jwtService.signAsync(payload) //objeto respuesta que me estoy inventando para luego llamarlo. 

        }
        return token
    }
    
    async register(user: User): Promise<TokenDTO> {

        await this.userService.create(user);

        // Opcional: realizar login en el propio registro
        let loginDTO: LoginDTO = {
            email: user.email,
            password: user.password
        }
        return await this.login(loginDTO);
    }

}