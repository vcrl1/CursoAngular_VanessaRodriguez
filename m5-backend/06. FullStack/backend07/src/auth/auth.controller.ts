import { Body, Controller, Post } from '@nestjs/common';
import { AuthService, LoginDTO } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() login: LoginDTO) { //:Promise<>
        console.log(login);
        return this.authService.login(login)

    }

}
