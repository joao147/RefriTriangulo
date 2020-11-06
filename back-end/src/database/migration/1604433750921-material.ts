import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class material1604433750921 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'material',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'material',
          type: 'varchar'
        },
        {
          name: 'materialPrice',
          type: 'decimal',
          scale: 2,
          precision: 6
        },
        {
          name: 'guarantee',
          type: 'varchar'
        },
        {
          name: 'postVisitId',
          type: 'integer',
          unsigned: true
        }
      ],
      foreignKeys: [
        {
          name: 'materialPostVisit',
          columnNames: ['postVisitId'],
          referencedTableName: 'post_visit',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ]
    }));
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('material');
  }

}
