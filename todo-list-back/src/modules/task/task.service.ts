import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';

import { Task } from '../../models/task.model';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) { }

    public save(task: any): Promise<Task> {
        try {
            const resp = this.taskRepository.save(task);
            return resp;
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }

    public findAll(): Promise<Task[]> {
        try {
            const resp = this.taskRepository.find();
            return resp;
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }

    public findOne(id: number): Promise<Task> {
        try {
            const resp = this.taskRepository.findOne({ where: { id } });
            return resp;
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }

    public async remove(id: number): Promise<void> {
        try {
            this.taskRepository.delete(id);
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }

    public async update(id: number, task: UpdateTaskDto): Promise<Task> {
        try {
            const taskSaved = await this.taskRepository.findOne({ where: { id } });
            taskSaved.description = task.description;
            taskSaved.completed = task.completed;
            return this.taskRepository.save(taskSaved);
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }

    public async findByProjectId(projectId: number): Promise<Task[]> {
        try {
            const resp = this.taskRepository.find({ where: { projectId } });
            return resp;
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }
}
