import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTask1660647253889 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "task",
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
                        name: "description",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "completed",
                        type: "boolean",
                        isNullable: false,
                        default: false
                    },
                    {
                        name: "projectId",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "createdAt",
                        type: "datetime",
                        default: "now()",
                    },
                    {
                        name: "updatedAt",
                        type: "datetime",
                        default: "now()",
                    }
                ],
            }),
            true,
        )

        await queryRunner.createForeignKey(
            "task",
            new TableForeignKey({
                columnNames: ["projectId"],
                referencedColumnNames: ["id"],
                referencedTableName: "project",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
