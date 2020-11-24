import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class visitInformation1604433739504 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'visit_information',
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
          name: 'equipamentType',
          type: 'varchar'
        },
        {
          name: 'equipamentBrand',
          type: 'varchar'
        },
        {
          name: 'equipamentModel',
          type: 'varchar',
        },
        {
          name: 'equipamentSerie',
          type: 'varchar'
        },
        {
          name: 'problem',
          type: 'varchar'
        },
        {
          name: 'visitId',
          type: 'integer',
          unsigned: true
        }
      ],
      foreignKeys: [
        {
          name: 'visitInformationVisit',
          columnNames: ['visitId'],
          referencedTableName: 'visit',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ],
    }));

  }


  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('visit_information');
  }

}
