import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entities';
import { CreateUserDto, UpdateUserDto } from '../../core/dtos';

@Injectable()
export class UserFactoryService {
  public createNewUser(createUserDto: CreateUserDto): UserEntity {
    const newUser = new UserEntity();
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.cpf = createUserDto.cpf;
    newUser.cnpj = createUserDto.cnpj;
    newUser.cellPhone = createUserDto.cellPhone;
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;

    return newUser;
  }

  public updateUser(updateUserDto: UpdateUserDto): UserEntity {
    const newUser = new UserEntity();
    newUser.firstName = updateUserDto.firstName;
    newUser.lastName = updateUserDto.lastName;
    newUser.cpf = updateUserDto.cpf;
    newUser.cnpj = updateUserDto.cnpj;
    newUser.cellPhone = updateUserDto.cellPhone;

    return newUser;
  }
}
