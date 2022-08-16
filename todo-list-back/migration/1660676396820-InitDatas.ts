import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatas1660676396820 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.createQueryBuilder().insert().into("user")
            .values({
                id: 1,
                name: 'Admin',
                username: 'admin',
                password: '$2b$10$/WNlWw2ItMb9d74fdolfjuXQwlu.IC0g4H6FHQIvTJfuAL.wVlDs.' //123456
            })
            .execute();

        await queryRunner.manager.createQueryBuilder().insert().into("role")
            .values({
                id: 1,
                name: 'admin',
            })
            .execute();

            await queryRunner.manager.createQueryBuilder().insert().into("role_users_user")
            .values({
                roleId: 1,
                userId: 1,
            })
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
