import {
  Controller,
  UsePipes,
  ValidationPipe,
  Body,
  Get,
  UseGuards,
  Param,
  Put,
  Delete,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/helpers';
import { CreateTaskDto, UpdateTaskDto } from 'src/core/dtos';
import { TaskEntity } from 'src/entities';
import { TaskUseCases } from 'src/use-cases/task/task.use-case';

@Controller('task')
@ApiTags('task')
export class TaskController {
  constructor(private taskUseCases: TaskUseCases) {}

  @Post('project/:id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  public createTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return this.taskUseCases.saveTask(id, createTaskDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  public findOne(@Param('id', ParseIntPipe) id: number): Promise<TaskEntity> {
    return this.taskUseCases.getTaskById(id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  public findAll(): Promise<TaskEntity[]> {
    return this.taskUseCases.getAllTask();
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<TaskEntity> {
    return this.taskUseCases.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  public remove(@Param('id', ParseIntPipe) id: number): Promise<TaskEntity> {
    return this.taskUseCases.delete(id);
  }
}
