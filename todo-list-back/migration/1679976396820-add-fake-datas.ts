import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFakeDatas1679976396820 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const users = this.getFakeUsers();
        const roles = this.getFakeUserRoles();

        await queryRunner.manager.createQueryBuilder().insert().into("user")
            .values(users)
            .execute();

        await queryRunner.manager.createQueryBuilder().insert().into("role_users_user")
            .values(roles)
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

    private getFakeUsers(): any[] {
        let users = [];
        for (let i = 2; i < 100; i++) {
            users.push({
                firstName: `Fake ${i}`,
                lastName: 'Silva',
                cpf: '00000000000',
                cnpj: '000000000',
                cellPhone: '000000000',
                email: `fake${i}@gmail.com`,
                password: '$2b$10$/WNlWw2ItMb9d74fdolfjuXQwlu.IC0g4H6FHQIvTJfuAL.wVlDs.'
            });
        }
        return users;
    }

    private getFakeUserRoles(): any[] {
        let roles = [];
        for (let i = 2; i < 100; i++) {
            roles.push({ roleId: 2, userId: i });
        }
        return roles;
    }

}
