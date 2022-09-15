import { Injectable } from '@nestjs/common';
import { TaskEntity } from '../../core/entities';
import { CreateTaskDto, UpdateTaskDto } from '../../core/dtos';

@Injectable()
export class TaskFactoryService {
  public createNewTask(
    createTaskDto: CreateTaskDto,
    projectId: number,
  ): TaskEntity {
    const newTask = new TaskEntity();
    newTask.description = createTaskDto.description;
    newTask.projectId = projectId;

    return newTask;
  }

  public updateTask(updateTaskDto: UpdateTaskDto): TaskEntity {
    const newTask = new TaskEntity();
    newTask.description = updateTaskDto.description;

    return newTask;
  }
}
