import { Repository } from 'typeorm';

import { TaskEntity } from '../model';
import { GenericRepository } from './base/generic-repository';
import { ITaskRepository } from 'src/core';

export class TaskRepository
  extends GenericRepository<TaskEntity>
  implements ITaskRepository<TaskEntity>
{
  constructor(protected repository: Repository<TaskEntity>) {
    super(repository);
  }
}
