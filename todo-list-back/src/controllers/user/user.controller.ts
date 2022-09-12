import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  ParseIntPipe,
  Request,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesEnum } from 'src/common/enums/role.enum';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { JwtAuthGuard } from 'src/common/helpers';

import { CreateUserDto, UpdateUserDto } from 'src/core/dtos';
import { UserUseCases } from 'src/use-cases/user/user.use-case';


@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private userUseCases: UserUseCases) { }

  @Post()
  @UsePipes(ValidationPipe)
  public create(@Body() createUserDto: CreateUserDto) {
    return this.userUseCases.createUser(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RolesEnum.Admin)
  public findAll(@Query() query: any) {
    const { offset, limit, sortBy } = query;
    return this.userUseCases.findAll(offset, limit, sortBy ? JSON.parse(sortBy) : null);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RolesEnum.Admin)
  public findOne(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.userUseCases.getUserById(id);
  }

  @Get('/own/get')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  public findOwn(@Request() req) {
    const userId = req.user.userId;
    return this.userUseCases.getUserById(userId);
  }

  @Put('/own/update')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RolesEnum.Admin)
  public updateOwn(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    const userId = req.user.userId;
    return this.userUseCases.updateUser(userId, updateUserDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RolesEnum.Admin)
  public update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userUseCases.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RolesEnum.Admin)
  public remove(@Param('id', ParseIntPipe) id: number) {
    return this.userUseCases.delete(id);
  }
}
