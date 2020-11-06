import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey, Table } from 'typeorm';

export class FKpostvisit1604582822007 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.addColumn('post_visit', new TableColumn({
      name: 'visitId',
      type: 'integer',
      unsigned: true,
    }));

    await queryRunner.createForeignKey('post_visit', new TableForeignKey({
      columnNames: ['visitId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'visit',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }));

  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    const table = await queryRunner.getTable('post_visit')
  
    if(table !== undefined){ 
      const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('visitId') !== -1);

      if(foreignKey !== undefined)
        await queryRunner.dropForeignKey('post_visit', foreignKey);

        await queryRunner.dropColumn('post_visit', 'visitId');
    }
  }

}
