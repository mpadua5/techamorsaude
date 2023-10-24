import { Clinica } from "src/clinica/entities/clinica.entity";
import { Column, Entity, Generated, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('especialidade')
export class Especialidade {
    @PrimaryGeneratedColumn("uuid")
    uuid: string;
    @Column()
    especialidade: string;

    @ManyToMany(() => Clinica, (clinica) => clinica.especialidade)
    clinica: Clinica[];
}
