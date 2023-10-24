import { MigrationInterface, QueryRunner } from "typeorm"
import fs from 'fs'

export class RegionalInsert1697888358376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try{

            // const script = fs.readFileSync(`./sql/1697888358376-regional_insert.sql`, "utf-8")
            // console.log(`TESTE ----> ${script}`)
            await queryRunner.query(`INSERT INTO regional VALUES (regional = 'teste')`);
        }catch (erro){
            console.log(erro)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
