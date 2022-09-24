import { Inject, Injectable } from '@nestjs/common';

import { RoleEntity } from 'src/entities';
import { CreateRoleDto, UpdateRoleDto } from '../../core/dtos';
import { RoleFactoryService } from './role-factory.service';
import { IDataServices, I_DATA_SERVICE } from 'src/core';

@Injectable()
export class RoleUseCases {
  constructor(
    @Inject(I_DATA_SERVICE) private dataServices: IDataServices,
    private roleFactoryService: RoleFactoryService,
  ) {}

  public getAllRoles(): Promise<RoleEntity[]> {
    return this.dataServices.roles.getAll();
  }

  public getRoleById(id: any): Promise<RoleEntity> {
    return this.dataServices.roles.get(id);
  }

  public createRole(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    const role = this.roleFactoryService.createNewRole(createRoleDto);
    return this.dataServices.roles.create(role);
  }

  public updateRole(
    roleId: number,
    updateRoleDto: UpdateRoleDto,
  ): Promise<RoleEntity> {
    const role = this.roleFactoryService.updateRole(updateRoleDto);
    return this.dataServices.roles.update(roleId, role);
  }

  public async delete(id: number): Promise<RoleEntity> {
    return this.dataServices.roles.delete(id);
  }
}
