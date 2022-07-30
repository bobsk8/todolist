import {
    Controller,
    UsePipes,
    ValidationPipe,
    Body,
    Get,
    UseGuards,
    Param,
    Put,
    Delete
} from '@nestjs/common';

import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags } from '@nestjs/swagger';
import { Task } from 'src/models/task.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/task')
@ApiTags('task')
export class TaskController {
    constructor(
        private taskService: TaskService
    ) { }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    public findOne(@Param('id') id: number): Promise<Task> {
        return this.taskService.findOne(id);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    public findAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    public update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
        return this.taskService.update(id, updateTaskDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    public remove(@Param('id') id: number): Promise<void> {
        return this.taskService.remove(id);
    }
}
