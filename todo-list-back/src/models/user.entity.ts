import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', nullable: false })
  public firstName: string;

  @Column({ type: 'varchar', nullable: false })
  public lastName: string;

  @Column({ type: 'varchar', nullable: false })
  public cpf: string;

  @Column({ type: 'varchar', nullable: false })
  public cnpj: string;

  @Column({ type: 'varchar', nullable: false })
  public cellPhone: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  public email: string;

  @Column({ type: 'varchar', nullable: false })
  public password: string;

  @OneToMany((type) => Project, (project) => project.user)
  public projects: Project[];

  @ManyToMany(() => Role, (role) => role.users)
  public roles: Role[];
}
