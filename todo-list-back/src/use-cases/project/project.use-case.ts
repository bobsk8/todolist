import { Inject, Injectable } from '@nestjs/common';

import { ProjectEntity } from 'src/entities';
import { CreateProjectDto, UpdateProjectDto } from '../../core/dtos';
import { ProjectFactoryService } from './project-factory.service';
import { IDataServices, I_DATA_SERVICE } from 'src/core';

@Injectable()
export class ProjectUseCases {
  constructor(
    @Inject(I_DATA_SERVICE) private dataServices: IDataServices,
    private projectFactoryService: ProjectFactoryService,
  ) {}

  public getAllProjects(): Promise<ProjectEntity[]> {
    return this.dataServices.projects.getAll();
  }

  public getProjectByIdAndUserId(
    id: any,
    userId: number,
  ): Promise<ProjectEntity> {
    return this.dataServices.projects.findByIdAndUserId(id, userId);
  }

  public async getByUserId(id: number): Promise<ProjectEntity[]> {
    return this.dataServices.projects.findByUserId(id);
  }

  public createProject(
    createProjectDto: CreateProjectDto,
    userId: number,
  ): Promise<ProjectEntity> {
    const project = this.projectFactoryService.createNewProject(
      createProjectDto,
      userId,
    );
    return this.dataServices.projects.create(project);
  }

  public updateProject(
    projectId: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<ProjectEntity> {
    const project = this.projectFactoryService.updateProject(updateProjectDto);
    return this.dataServices.projects.update(projectId, project);
  }

  public async delete(id: number): Promise<ProjectEntity> {
    return this.dataServices.projects.delete(id);
  }
}
