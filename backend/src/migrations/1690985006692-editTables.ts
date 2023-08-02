import { MigrationInterface, QueryRunner } from "typeorm";

export class editTables1690985006692 implements MigrationInterface {
    name = 'editTables1690985006692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "claims" DROP CONSTRAINT "FK_e9c515b74b23eb3558a77b90e3d"`);
        await queryRunner.query(`ALTER TABLE "claims" DROP CONSTRAINT "REL_e9c515b74b23eb3558a77b90e3"`);
        await queryRunner.query(`ALTER TABLE "claims" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "claims" ADD "street" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "claims" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "claims" ADD "neighborhood" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "claims" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "claims" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "claims" ADD "country" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "claims" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "claims" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "claims" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "claims" DROP COLUMN "neighborhood"`);
        await queryRunner.query(`ALTER TABLE "claims" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "claims" DROP COLUMN "street"`);
        await queryRunner.query(`ALTER TABLE "claims" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "claims" ADD CONSTRAINT "REL_e9c515b74b23eb3558a77b90e3" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "claims" ADD CONSTRAINT "FK_e9c515b74b23eb3558a77b90e3d" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
