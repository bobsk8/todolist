import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';

import { ProjectEntity } from './project.entity';
import { RoleEntity } from './role.entity';
import { BaseEntity } from './base/base.entity';
import { IUserEntity } from 'src/core/abstracts/models/user-entity.interface';

@Entity('user')
export class UserEntity extends BaseEntity implements IUserEntity {
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

  @Column({ type: 'boolean', nullable: false, default: true })
  public active: boolean;

  @Column({ type: 'varchar', nullable: false })
  public password: string;

  @OneToMany(() => ProjectEntity, (project) => project.user)
  public projects: ProjectEntity[];

  @ManyToMany(() => RoleEntity, (role) => role.users)
  public roles: RoleEntity[];
}
