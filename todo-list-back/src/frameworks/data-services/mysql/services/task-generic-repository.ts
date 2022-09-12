import { TaskEntity } from '../model';
import { Repository } from 'typeorm';
import { GenericRepository } from './base/generic-repository';
import { ITaskRepository } from 'src/core/abstracts/task-repository.abstract';

export class TaskRepository extends GenericRepository<TaskEntity> implements ITaskRepository<TaskEntity> {

  constructor(
    protected repository: Repository<TaskEntity>
  ) {
    super(repository);
  }
}
