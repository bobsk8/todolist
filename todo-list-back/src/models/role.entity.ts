import { User } from 'src/models/user.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar', nullable: false, unique: true })
    public name: string;

    @ManyToMany(() => User, (user) => user.roles)
    @JoinTable()
    public users: User[]

}
