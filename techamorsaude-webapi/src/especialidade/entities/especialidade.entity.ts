import { Clinica } from "src/clinica/entities/clinica.entity";
import { Column, Entity, ManyToMany } from "typeorm";

@Entity('especialidade')
export class Especialidade {
    @Column({ primary: true, generated: 'uuid' })
    uuid: string;
    @Column()
    especialidade: string;

    @ManyToMany(() => Clinica, (clinica) => clinica.especialidade)
    clinica: Clinica[];
}
