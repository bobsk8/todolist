import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { passwordHash } from 'src/shared/helpers';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async save(user: CreateUserDto): Promise<User> {
    try {
      user.password = passwordHash(user.password);
      const resp = await this.usersRepository.save(user);
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

  public findAll(): Promise<User[]> {
    try {
      const resp = this.usersRepository.find();
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
      const resp = await this.usersRepository.findOne(id);
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

  public findByUserName(username: string): Promise<User> {
    try {
      const resp = this.usersRepository.findOne({ where: { username } });
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
      const userSaved = await this.usersRepository.findOne(id);
      userSaved.name = user.name;
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
