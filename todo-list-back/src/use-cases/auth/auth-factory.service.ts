
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../core/entities';
import { CredentialsDto } from '../../core/dtos';

@Injectable()
export class AuthFactoryService {
  public authentication(credentialsDto: CredentialsDto): UserEntity {
    const newCredential = new UserEntity();
    newCredential.email = credentialsDto.email;
    newCredential.password = credentialsDto.password;

    return newCredential;
  }
}
