import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';

import { CredentialsDto, LoginUserDto } from 'src/core/dtos';
import { AuthUseCases } from 'src/use-cases/auth/auth.use-case';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authUseCases: AuthUseCases) {}

  @Post('login')
  @Throttle(5, 60)
  @UsePipes(ValidationPipe)
  public async login(@Body() credentialsDto: CredentialsDto): Promise<LoginUserDto> {
    return this.authUseCases.login(credentialsDto);
  }
}
