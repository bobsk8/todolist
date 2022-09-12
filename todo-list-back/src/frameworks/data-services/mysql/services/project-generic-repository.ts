import { Repository } from 'typeorm';

import { ProjectEntity } from '../model';
import { GenericRepository } from './base/generic-repository';
import { IProjectRepository } from 'src/core';

export class ProjectRepository extends GenericRepository<ProjectEntity> implements IProjectRepository<ProjectEntity> {

  constructor(
    protected repository: Repository<ProjectEntity>
  ) {
    super(repository);
  }

  public findByUserId(id: number): Promise<ProjectEntity[]> {
    return this.repository
      .createQueryBuilder('project')
      .leftJoinAndSelect('project.tasks', 'task')
      .where('project.userId = :id', { id })
      .getMany();
  }

  public findByIdAndUserId(id: number, userId: number): Promise<ProjectEntity> {
    return this.repository.findOne({ where: { id, userId } });
  }
}
