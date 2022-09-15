import { Injectable } from '@nestjs/common';
import { ProjectEntity } from '../../core/entities';
import { CreateProjectDto, UpdateProjectDto } from '../../core/dtos';

@Injectable()
export class ProjectFactoryService {
  public createNewProject(
    createProjectDto: CreateProjectDto,
    userId: number,
  ): ProjectEntity {
    const newProject = new ProjectEntity();
    newProject.name = createProjectDto.name;
    newProject.userId = userId;

    return newProject;
  }

  public updateProject(updateProjectDto: UpdateProjectDto): ProjectEntity {
    const newProject = new ProjectEntity();
    newProject.name = updateProjectDto.name;

    return newProject;
  }
}
