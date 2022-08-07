import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Project } from '../../models/project.model';
import { Task } from '../../models/task.model';
import { TaskService } from '../task/task.service';
import { CreateTaskDto } from '../task/dto/create-task.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class ProjectService {
    constructor(
        private userService: UserService,
        private taskService: TaskService,
        @InjectRepository(Project)
        private projectRepository: Repository<Project>
    ) { }

    public async save(project: CreateProjectDto, id: number): Promise<Project> {
        try {
            const user = await this.userService.findOne(id);
            project.user = user;
            return this.projectRepository.save(project);
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }

    }

    public async findByUserId(id: number): Promise<Project[]> {
        try {
            return this.projectRepository
                .createQueryBuilder('project')
                .leftJoinAndSelect('project.tasks', 'task')
                .where('project.userId = :id', { id })
                .getMany();
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }

    public async findOne(id: number, userId: number): Promise<Project> {
        try {
            const data = this.projectRepository.findOne({ where: { id, userId } });
            return data;
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }

    public async remove(id: number): Promise<void> {
        try {
            this.projectRepository.delete(id);
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }

    public async update(id: number, project: UpdateProjectDto): Promise<Project> {
        try {
            const projectSave = await this.projectRepository.findOne(id);
            projectSave.name = project.name;
            return this.projectRepository.save(projectSave);
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }

    public async saveTask(id: number, createTask: CreateTaskDto) {
        try {
            const project = await this.projectRepository.findOne(id);
            const task = new Task();
            task.description = createTask.description;
            task.project = project;
            return this.taskService.save(task);
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }

    }
}
