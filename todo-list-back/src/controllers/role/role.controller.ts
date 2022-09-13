import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';

import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesEnum } from 'src/common/enums/role.enum';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { JwtAuthGuard } from 'src/common/helpers';
import { CreateRoleDto, UpdateRoleDto } from 'src/core/dtos';
import { RoleUseCases } from 'src/use-cases/role/role.use-case';

@Controller('role')
export class RoleController {
  constructor(
    private readonly roleUseCases: RoleUseCases
  ) { }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RolesEnum.Admin)
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleUseCases.createRole(createRoleDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RolesEnum.Admin)
  findAll() {
    return this.roleUseCases.getAllRoles();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RolesEnum.Admin)
  findOne(@Param('id') id: string) {
    return this.roleUseCases.getRoleById(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RolesEnum.Admin)
  update(@Param('id') id: number, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleUseCases.updateRole(id, updateRoleDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RolesEnum.Admin)
  remove(@Param('id') id: number) {
    return this.roleUseCases.delete(id);
  }
}
