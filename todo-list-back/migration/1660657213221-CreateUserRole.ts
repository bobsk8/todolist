import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserRole1660657213221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'role_users_user',
            columns: [
                {
                    name: 'roleId',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name: 'userId',
                    type: 'int',
                    isPrimary: true,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['roleId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'role',
                },
                {
                    columnNames: ['userId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'user',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
