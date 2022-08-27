import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1660647231419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isUnique: true,
                        generationStrategy: "increment",
                        isGenerated: true
                    },
                    {
                        name: "firstName",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "lastName",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "cnpj",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "cellPhone",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }

}
