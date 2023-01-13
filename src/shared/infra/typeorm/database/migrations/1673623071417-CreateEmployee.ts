import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmployee1673623071417 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'employee',
        columns: [
          {
            name: 'id',
            type: 'int(11)',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar(64)'
          },
          {
            name: 'username',
            type: 'varchar(64)',
            isUnique: true
          },
          {
            name: 'password',
            type: 'varchar(100)'
          },
          {
            name: 'email',
            type: 'varchar(64)',
            isUnique: true
          },
          {
            name: 'rule',
            type: 'varchar(64)'
          },
          {
            name: 'department',
            type: 'varchar(64)'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('employees');
  }

}
