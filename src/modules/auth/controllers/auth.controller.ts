import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { RegisterDto } from '../dto/register.dto';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dto/login.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('sign-up')
    register(@Body() dto: RegisterDto) {
        console.log('Registering user with email:', dto);
        return this.authService.register(
            dto.email,
            dto.password,
            dto.role,
        );
    }
    @Post('sign-in')
    @HttpCode(200)
    login(@Body() dto: LoginDto) {
        return this.authService.login(
            dto.email,
            dto.password,
        );
    }
}
