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
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('project')
@ApiTags('project')
export class ProjectController {
    constructor(
        private projectService: ProjectService
    ) { }

    @Post()
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard)
    public create(@Body() createProjectDto: CreateProjectDto, @Request() req) {
        const id = req.user.id;
        return this.projectService.save(createProjectDto, id);
    }

    @Get()
    @UseGuards(AuthGuard)
    public findAll(@Request() req) {
        const userId = req.user.id;
        return this.projectService.findByUserId(userId);
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    public findOne(@Param('id') id) {
        return this.projectService.findOne(id);
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    @UsePipes(ValidationPipe)
    public update(@Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto) {
        return this.projectService.update(id, updateProjectDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    public remove(@Param('id') id: number) {
        return this.projectService.remove(id);
    }

    @Post(':id/task')
    @UseGuards(AuthGuard)
    @UsePipes(ValidationPipe)
    public createTask(@Param('id') id: number, @Body() createTaskDto: CreateTaskDto) {
        return this.projectService.saveTask(id, createTaskDto);
    }
}
