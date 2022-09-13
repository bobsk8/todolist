import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateUserDto, UpdateUserDto } from '../../core/dtos';
import { UserFactoryService } from './user-factory.service';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private userFactoryService: UserFactoryService,
  ) { }

  public findAll(skip = 0, take = 10, order: any = { id: 'DESC' }): Promise<UserEntity[]> {
    return this.dataServices.users.getAllUsersPagination(skip, take, order);
  }

  public getUserById(id: any): Promise<UserEntity> {
    return this.dataServices.users.get(id);
  }

  public createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = this.userFactoryService.createNewUser(createUserDto);
    return this.dataServices.users.create(user);
  }

  public updateUser(userId: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = this.userFactoryService.updateUser(updateUserDto);
    return this.dataServices.users.update(userId, user);
  }

  public async delete(id: number): Promise<UserEntity> {
    return this.dataServices.users.delete(id);
  }
}
