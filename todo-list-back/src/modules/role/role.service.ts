import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Role } from 'src/models/role.entity';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>
  ) { }

  public async save(role: CreateRoleDto): Promise<Role> {
    try {
      return this.roleRepository.save(role);
    } catch (err) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: err.errmsg,
      }, HttpStatus.FORBIDDEN);
    }

  }

  public async findOne(id: number): Promise<Role> {
    try {
      return this.roleRepository.findOne({ where: { id } });
    } catch (err) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: err.errmsg,
      }, HttpStatus.FORBIDDEN);
    }
  }

  public findAll(): Promise<Role[]> {
    try {
      return this.roleRepository.find();
    } catch (err) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: err.errmsg,
      }, HttpStatus.FORBIDDEN);
    }
  }

  public async remove(id: number): Promise<void> {
    try {
      this.roleRepository.delete(id);
    } catch (err) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: err.errmsg,
      }, HttpStatus.FORBIDDEN);
    }
  }

  public async update(id: number, role: UpdateRoleDto): Promise<Role> {
    try {
      return this.roleRepository.save({ id, ...role });
    } catch (err) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: err.errmsg,
      }, HttpStatus.FORBIDDEN);
    }
  }

}
