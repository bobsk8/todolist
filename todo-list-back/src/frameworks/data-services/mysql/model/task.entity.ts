import {
  Column,
  Entity,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

import { ProjectEntity } from './project.entity';
import { BaseEntity } from './base/base.entity';
import { ITaskEntity } from 'src/core/abstracts/models/task-entity.interface';

@Entity('task')
export class TaskEntity extends BaseEntity implements ITaskEntity {
  @Column({ type: 'varchar', nullable: false })
  public description: string;

  @Column({ type: 'boolean', default: false })
  public completed: boolean;

  @Column({ type: 'varchar', nullable: false })
  public projectId: number;

  @ManyToOne(() => ProjectEntity, (project) => project.tasks, {
    onDelete: 'CASCADE',
  })
  public project: ProjectEntity;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
