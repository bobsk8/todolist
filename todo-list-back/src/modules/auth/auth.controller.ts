import { Controller, Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';

import { CredentialsDto } from './dto/credentials.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @Post('login')
    @Throttle(5, 60)
    @UsePipes(ValidationPipe)
    async login(@Body() credentialsDto: CredentialsDto): Promise<LoginUserDto> {
        return this.authService.login(credentialsDto);
    }
}
