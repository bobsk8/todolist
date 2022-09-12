import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CredentialsDto, LoginUserDto } from '../../core/dtos';
import { AuthFactoryService } from './auth-factory.service';
import { IDataServices, UserEntity } from 'src/core';
import { passwordCompare } from 'src/common/helpers';

@Injectable()
export class AuthUseCases {
  constructor(
    private dataServices: IDataServices,
    private authFactoryService: AuthFactoryService,
    private jwtService: JwtService
  ) { }

  public async login(credentialsDto: CredentialsDto): Promise<LoginUserDto> {
    try {
      const user = await this.validateUser(credentialsDto);
      if (!user) {
        throw new Error;
      }
      const payload = { email: user.email, sub: user.id, roles: user.roles };
      delete user.password;
      const token = this.jwtService.sign(payload);
      return new LoginUserDto(user, token);
    } catch (err) {
      throw new UnauthorizedException(`email or password is incorrect`);;
    }
  }

  private async validateUser(credentialsDto: CredentialsDto): Promise<UserEntity> {
    const authentication = this.authFactoryService.authentication(credentialsDto);
    const { email, password } = authentication;
    try {
      const user = await this.dataServices.users.getByEmail(email);

      if (!user) {
        return null;
      }

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
