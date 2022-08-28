import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';

import { Task } from '../../models/task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) { }

    public save(task: any): Promise<Task> {
        try {
            return this.taskRepository.save(task);
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }

    public findAll(): Promise<Task[]> {
        try {
            return this.taskRepository.find();
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }

    public findOne(id: number): Promise<Task> {
        try {
            return this.taskRepository.findOne({ where: { id } });
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
            return this.taskRepository.save({ id, task });
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }

    public async findByProjectId(projectId: number): Promise<Task[]> {
        try {
            return this.taskRepository.find({ where: { projectId } });
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err.errmsg,
            }, HttpStatus.FORBIDDEN);
        }
    }
}
