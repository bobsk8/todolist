import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../entities';
import { CredentialsDto, LoginUserDto } from '../../core/dtos';

@Injectable()
export class AuthFactoryService {
  public authentication(credentialsDto: CredentialsDto): UserEntity {
    const newCredential = new UserEntity();
    newCredential.email = credentialsDto.email;
    newCredential.password = credentialsDto.password;

    return newCredential;
  }

  public createPayload(user: UserEntity): any {
    const payload = { email: user.email, sub: user.id, roles: user.roles };
    return payload;
  }

  public getAuthenticateUser(user: UserEntity, token: string): LoginUserDto {
    delete user.password;
    return new LoginUserDto(user, token);
  }
}
