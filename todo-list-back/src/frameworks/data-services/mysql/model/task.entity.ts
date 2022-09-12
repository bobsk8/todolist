import {
  Column,
  Entity,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

import { ProjectEntity } from './project.entity';
import { BaseEntity } from './base/base.entity';

@Entity('task')
export class TaskEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  public description: string;

  @Column({ type: 'boolean', default: false })
  public completed: boolean;

  @Column({ type: 'varchar', nullable: false })
  public projectId: number;

  @ManyToOne((type) => ProjectEntity, (project) => project.tasks, {
    onDelete: "CASCADE"
  })
  public project: ProjectEntity;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
