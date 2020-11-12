import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addColumnVisitStatus1605205128367 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('visit', new TableColumn({
            name: 'status',
            type: 'boolean',
            default: false
          }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('visit', 'status');
    }

}
