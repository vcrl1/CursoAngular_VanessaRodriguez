import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UsersService } from "src/users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private userService: UsersService) {
        console.log("Jwt strategy en acción!");

        super({
            // extrae el token de la header Authorization y verifica si es correcto
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'holamundo'
        })
    }

    async validate(payload: any) {
        console.log("Validate JWTStrategy");
        console.log(payload);

        let user = await this.userService.findById(payload.sub);

        if(!user) 
            throw new UnauthorizedException('Autenticación incorrecta'); // 401

        return user;
    }

}