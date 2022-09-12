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
    Request,
    ParseIntPipe
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/helpers';
import { CreateProjectDto, UpdateProjectDto } from 'src/core/dtos';
import { ProjectUseCases } from 'src/use-cases/project/project.use-case';

@Controller('project')
@ApiTags('project')
export class ProjectController {
    constructor(
        private projectUseCases: ProjectUseCases
    ) { }

    @Post()
    @UsePipes(ValidationPipe)
    @UseGuards(JwtAuthGuard)
    public create(@Body() createProjectDto: CreateProjectDto, @Request() req) {
        const id = req.user.userId;
        return this.projectUseCases.createProject(createProjectDto, id);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    public findAll(@Request() req) {
        const userId = req.user.userId;
        return this.projectUseCases.getByUserId(userId);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    public findOne(@Param('id', ParseIntPipe) id, @Request() req) {
        const userId = req.user.userId;
        return this.projectUseCases.getProjectByIdAndUserId(id, userId);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    public update(@Param('id', ParseIntPipe) id: number, @Body() updateProjectDto: UpdateProjectDto) {
        return this.projectUseCases.updateProject(id, updateProjectDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    public remove(@Param('id', ParseIntPipe) id: number) {
        return this.projectUseCases.delete(id);
    }
}
