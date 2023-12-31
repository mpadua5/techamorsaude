import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class RegionalInsert1697888358376 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(`INSERT INTO regional VALUES 
            ("${uuidv4()}", "Alto Tietê"),
            ("${uuidv4()}", "Interior"),
            ("${uuidv4()}", "ES"),
            ("${uuidv4()}", "SP Interior"),
            ("${uuidv4()}", "SP"),
            ("${uuidv4()}", "SP1"),
            ("${uuidv4()}", "SP2"),
            ("${uuidv4()}", "SP CAV"),
            ("${uuidv4()}", "MG"),
            ("${uuidv4()}", "Nacional"),
            ("${uuidv4()}", "RJ"),
            ("${uuidv4()}", "NE1"),
            ("${uuidv4()}", "NE2"),
            ("${uuidv4()}", "Sul"),
            ("${uuidv4()}", "Norte")
            `);
    } catch (erro) {
      console.log(erro);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    try{
      await queryRunner.query(`DELETE FROM regional`);

    } catch(erro) {
      console.log(erro)
    }
  }
}
