import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', nullable: false })
  public name: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  public username: string;

  @Column({ type: 'varchar', nullable: false })
  public password: string;

  @OneToMany((type) => Project, (project) => project.user)
  public projects: Project[];

  @ManyToMany(() => Role, (role) => role.users)
  public roles: Role[];
}
