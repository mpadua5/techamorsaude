import { MigrationInterface, QueryRunner } from "typeorm"
import { v4 as uuidv4 } from 'uuid';

export class EspecialidadeInserts1698209888823 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query(`INSERT INTO especialidade VALUES 
                  ("${uuidv4()}", "Fisioterapia"),
                  ("${uuidv4()}", "Pediatria"),
                  ("${uuidv4()}", "Ginecologia"),
                  ("${uuidv4()}", "Ortopedia"),
                  ("${uuidv4()}", "Dermatologia"),
                  ("${uuidv4()}", "Cardiologia"),
                  ("${uuidv4()}", "Oftalmologia"),
                  ("${uuidv4()}", "Otorrinolaringologia"),
                  ("${uuidv4()}", "Psiquiatria"),
                  ("${uuidv4()}", "Endocrinologia")
                  `);
          } catch (erro) {
            console.log(erro);
          }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try{
            await queryRunner.query(`DELETE FROM especialidade`)
        } catch (erro) {
            console.log(erro)
        }
    }

}

