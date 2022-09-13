import { Injectable } from '@nestjs/common';
import { RoleEntity } from '../../core/entities';
import { CreateRoleDto, UpdateRoleDto } from '../../core/dtos';

@Injectable()
export class RoleFactoryService {
  public createNewRole(createRoleDto: CreateRoleDto): RoleEntity {
    const newRole = new RoleEntity();
    newRole.name = createRoleDto.name;

    return newRole;
  }

  public updateRole(updateRoleDto: UpdateRoleDto): RoleEntity {
    const newRole = new RoleEntity();
    newRole.name = updateRoleDto.name;

    return newRole;
  }
}
