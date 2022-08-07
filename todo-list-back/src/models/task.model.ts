import {
  Column,
  Entity,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Project } from './project.model';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', nullable: false })
  public description: string;

  @Column({ type: 'boolean', default: false })
  public completed: boolean;

  @Column({ type: 'varchar', nullable: false })
  public projectId: number;

  @ManyToOne((type) => Project, (project) => project.tasks, {
    onDelete: "CASCADE"
  })
  public project: Project;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
