import { 
    Controller, 
    Post, 
    Body, 
    ValidationPipe, 
    UsePipes,
    Request, 
    UseGuards
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CredentialsDto } from './dto/credentials.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { LogoutUserDto } from './logout-user.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @Post('login')
    @UsePipes(ValidationPipe)
    public async login(@Body() credentialsDto: CredentialsDto): Promise<LoginUserDto> {
        return this.authService.login(credentialsDto);
    }

    @Post('logout')
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard)
    public async logout(@Request() req): Promise<LogoutUserDto> {
        const user = req.user;
        return this.authService.logout(user);
    }
}
