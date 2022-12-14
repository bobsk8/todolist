import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CredentialsDto, LoginUserDto } from '../../core/dtos';
import { AuthFactoryService } from './auth-factory.service';
import { IDataServices, I_DATA_SERVICE } from 'src/core';
import { passwordCompare } from 'src/common/helpers';
import { UserEntity } from 'src/entities';

@Injectable()
export class AuthUseCases {
  constructor(
    @Inject(I_DATA_SERVICE) private dataServices: IDataServices,
    private authFactoryService: AuthFactoryService,
    private jwtService: JwtService,
  ) {}

  public async login(credentialsDto: CredentialsDto): Promise<LoginUserDto> {
    try {
      const user = await this.validateUser(credentialsDto);
      if (!user) throw new Error();

      const payload = this.authFactoryService.createPayload(user);
      const token = this.jwtService.sign(payload);
      return this.authFactoryService.getAuthenticateUser(user, token);
    } catch (err) {
      throw new UnauthorizedException(`email or password is incorrect`);
    }
  }

  private async validateUser(
    credentialsDto: CredentialsDto,
  ): Promise<UserEntity> {
    const authentication =
      this.authFactoryService.authentication(credentialsDto);
    const { email, password } = authentication;
    try {
      const user = await this.dataServices.users.getByEmail(email);
      if (!user) return null;

      const isValid = await passwordCompare(password, user.password);
      if (isValid) {
        return user;
      } else {
        return null;
      }
    } catch (err) {
      throw Error;
    }
  }
}
