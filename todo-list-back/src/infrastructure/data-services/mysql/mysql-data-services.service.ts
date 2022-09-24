import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProjectEntity, RoleEntity, TaskEntity, UserEntity } from './model';
import { IDataServices } from '../../../core';
import { ProjectRepository, RoleRepository, TaskRepository, UserRepository } from './services';

@Injectable()
export class MysqlDataServices
  implements IDataServices, OnApplicationBootstrap
{
  projects: ProjectRepository;
  roles: RoleRepository;
  tasks: TaskRepository;
  users: UserRepository;

  constructor(
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  onApplicationBootstrap() {
    this.projects = new ProjectRepository(this.projectRepository);
    this.roles = new RoleRepository(this.roleRepository);
    this.tasks = new TaskRepository(this.taskRepository);
    this.users = new UserRepository(this.userRepository);
  }
}
