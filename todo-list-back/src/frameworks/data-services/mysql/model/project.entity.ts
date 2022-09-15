import { IProjectEntity } from 'src/core/abstracts/models/project-entity.interface';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from './base/base.entity';
import { TaskEntity } from './task.entity';
import { UserEntity } from './user.entity';

@Entity('project')
export class ProjectEntity extends BaseEntity implements IProjectEntity {
  @Column({ type: 'varchar', nullable: false })
  public name: string;

  @Column({ type: 'number', nullable: false })
  public userId: number;

  @OneToMany(() => TaskEntity, (task) => task.project)
  public tasks: TaskEntity[];

  @ManyToOne(() => UserEntity, (user) => user.projects)
  public user: UserEntity;
}
