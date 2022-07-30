import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from './task.model';
import { User } from './user.model';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @OneToMany((type) => Task, (task) => task.project)
  tasks: Task[];

  @ManyToOne((type) => User, (user) => user.projects)
  user: User;
}
