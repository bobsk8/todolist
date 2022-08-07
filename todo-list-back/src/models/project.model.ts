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
  public id: number;

  @Column({ type: 'varchar', nullable: false })
  public name: string;

  @Column({ type: 'number', nullable: false })
  public userId: number;

  @OneToMany((type) => Task, (task) => task.project)
  public tasks: Task[];

  @ManyToOne((type) => User, (user) => user.projects)
  public user: User;
}
