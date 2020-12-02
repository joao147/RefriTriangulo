import { MigrationInterface, QueryRunner } from "typeorm";

export class admimPassword1606926553734 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO user (email, password) VALUES ('test@gmail.com', '${process.env.ADMIM_PASSWORD}')`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "DELETE FROM user WHERE email = 'test@gmail.com'",
    );
  }

}
