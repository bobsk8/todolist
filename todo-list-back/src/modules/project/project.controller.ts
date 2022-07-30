import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Param, Put, Delete, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateTaskDto } from '../task/dto/create-task.dto';

@Controller('api/project')
@ApiTags('project')
export class ProjectController {
    constructor(
        private projectService: ProjectService
    ) { }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createProjectDto: CreateProjectDto, @Request() req) {
        const id = req.user.userId;
        return this.projectService.save(createProjectDto, id);
    }

    @Get()
    findAll(@Request() req) {
        const userId = req.user.userId;
        return this.projectService.findByUserId(userId);
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return this.projectService.findOne(id);
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    update(@Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto) {
        return this.projectService.update(id, updateProjectDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.projectService.remove(id);
    }

    @Post(':id/task')
    @UsePipes(ValidationPipe)
    createTask(@Param('id') id: number, @Body() createTaskDto: CreateTaskDto) {
        return this.projectService.saveTask(id, createTaskDto);
    }
}
