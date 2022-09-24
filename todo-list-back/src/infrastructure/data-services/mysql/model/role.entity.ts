import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { UserEntity } from './user.entity';
import { BaseEntity } from './base/base.entity';
import { IRoleEntity } from 'src/core';

@Entity('role')
export class RoleEntity extends BaseEntity implements IRoleEntity {
  @Column({ type: 'varchar', nullable: false, unique: true })
  public name: string;

  @ManyToMany(() => UserEntity, (user) => user.roles)
  @JoinTable()
  public users: UserEntity[];
}
