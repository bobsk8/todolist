import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/models/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { passwordHash } from 'src/shared/helpers';
import { RoleService } from '../role/role.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private roleService: RoleService
  ) {}

  public async save(user: CreateUserDto): Promise<User> {
    try {
      user.password = await passwordHash(user.password);
      const role = await this.roleService.findOne(2);
      const resp = await this.usersRepository.save({...user, roles: [role]});
      delete resp.password;
      return resp;
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: err.errmsg,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  public findAll(skip = 0, take = 10, order: any = { id: 'DESC' }): Promise<User[]> {
    try {
      const resp = this.usersRepository.find({
        order,
        skip,
        take
      });
      return resp;
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: err.errmsg,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  public async findOne(id: number): Promise<User> {
    try {
      const resp = await this.usersRepository.findOne({ where: { id } });
      delete resp.password;
      return resp;
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: err.errmsg,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  public findByEmail(email: string): Promise<User> {
    try {
      const resp = this.usersRepository.findOne({
        where: { email }, relations: {
          roles: true,
        }
      });
      return resp;
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: err.errmsg,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  public async remove(id: number): Promise<void> {
    try {
      this.usersRepository.delete(id);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: err.errmsg,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  public async update(id: number, user: UpdateUserDto): Promise<User> {
    try {
      const userSaved = await this.usersRepository.findOne({ where: { id } });
      // userSaved.name = user.name;
      const resp = this.usersRepository.save(user);
      return resp;
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: err.errmsg,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
