import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class postVisit1604433722610 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'post_visit',
      columns:[
        {
          name: 'id',
          type:'integer',
          unsigned: true,
          isPrimary: true,
          generationStrategy: 'increment'
        },
        {
          name: 'laborPrice',
          type: 'decimal',
          scale: 2,
          precision: 6
        },
        {
          name: 'totalPrice',
          type: 'decimal',
          scale: 2,
          precision: 6
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('post_visit')
  }

}
