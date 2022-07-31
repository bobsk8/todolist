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
    Request
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateTaskDto } from '../task/dto/create-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('project')
@ApiTags('project')
export class ProjectController {
    constructor(
        private projectService: ProjectService
    ) { }

    @Post()
    @UsePipes(ValidationPipe)
    @UseGuards(JwtAuthGuard)
    create(@Body() createProjectDto: CreateProjectDto, @Request() req) {
        const id = req.user.userId;
        return this.projectService.save(createProjectDto, id);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    findAll(@Request() req) {
        const userId = req.user.userId;
        return this.projectService.findByUserId(userId);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne(@Param('id') id) {
        return this.projectService.findOne(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    update(@Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto) {
        return this.projectService.update(id, updateProjectDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    remove(@Param('id') id: number) {
        return this.projectService.remove(id);
    }

    @Post(':id/task')
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    createTask(@Param('id') id: number, @Body() createTaskDto: CreateTaskDto) {
        return this.projectService.saveTask(id, createTaskDto);
    }
}
