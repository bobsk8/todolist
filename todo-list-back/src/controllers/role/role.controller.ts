import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreateRoleDto, UpdateRoleDto } from 'src/core/dtos';
import { RoleUseCases } from 'src/use-cases/role/role.use-case';

@Controller('role')
export class RoleController {
  constructor(
    private readonly roleUseCases: RoleUseCases
  ) { }

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleUseCases.createRole(createRoleDto);
  }

  @Get()
  findAll() {
    return this.roleUseCases.getAllRoles();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleUseCases.getRoleById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleUseCases.updateRole(id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.roleUseCases.delete(id);
  }
}
