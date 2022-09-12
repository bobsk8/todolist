import { Injectable } from '@nestjs/common';
import { RoleEntity } from '../../core/entities';
import { CreateRoleDto, UpdateRoleDto } from '../../core/dtos';

@Injectable()
export class RoleFactoryService {
  createNewRole(createRoleDto: CreateRoleDto) {
    const newRole = new RoleEntity();
    newRole.name = createRoleDto.name;

    return newRole;
  }

  updateRole(updateRoleDto: UpdateRoleDto) {
    const newRole = new RoleEntity();
    newRole.name = updateRoleDto.name;

    return newRole;
  }
}
