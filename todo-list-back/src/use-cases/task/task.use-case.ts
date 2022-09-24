import { Inject, Injectable } from '@nestjs/common';

import { TaskEntity } from 'src/entities';
import { CreateTaskDto, UpdateTaskDto } from '../../core/dtos';
import { TaskFactoryService } from './task-factory.service';
import { IDataServices, I_DATA_SERVICE } from 'src/core';

@Injectable()
export class TaskUseCases {
  constructor(
    @Inject(I_DATA_SERVICE) private dataServices: IDataServices,
    private taskFactoryService: TaskFactoryService,
  ) {}

  public saveTask(
    projectId: number,
    createTaskDto: CreateTaskDto,
  ): Promise<TaskEntity> {
    const task = this.taskFactoryService.createNewTask(
      createTaskDto,
      projectId,
    );
    return this.dataServices.tasks.create(task);
  }

  public getAllTask(): Promise<TaskEntity[]> {
    return this.dataServices.tasks.getAll();
  }

  public getTaskById(id: any): Promise<TaskEntity> {
    return this.dataServices.tasks.get(id);
  }

  public updateTask(
    taskId: number,
    updateTaskDto: UpdateTaskDto,
  ): Promise<TaskEntity> {
    const task = this.taskFactoryService.updateTask(updateTaskDto);
    return this.dataServices.tasks.update(taskId, task);
  }

  public async delete(id: number): Promise<TaskEntity> {
    return this.dataServices.tasks.delete(id);
  }
}
