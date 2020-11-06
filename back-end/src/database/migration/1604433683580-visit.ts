import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class visit1604433683580 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'visit',
      columns:[
        {
          name: 'id',
          type:'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'adress',
          type: 'varchar'
        },
        {
          name: 'contact',
          type: 'varchar'
        },
        {
          name: 'secondContact',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'visitDate',
          type: 'varchar'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('visit')
  }

}
