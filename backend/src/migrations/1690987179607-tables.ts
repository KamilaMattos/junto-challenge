import { MigrationInterface, QueryRunner } from "typeorm";

export class tables1690987179607 implements MigrationInterface {
    name = 'tables1690987179607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "ativo" TO "isActive"`);
        await queryRunner.query(`ALTER TABLE "claims" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "claims" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "isActive" TO "ativo"`);
    }

}
