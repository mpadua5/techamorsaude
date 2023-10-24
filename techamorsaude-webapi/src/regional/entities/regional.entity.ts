import { Clinica } from "src/clinica/entities/clinica.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity('regional')
export class Regional {
    @Column({ primary: true, generated: 'uuid' })
    uuid: string;
    @Column()
    regional: string;

    @OneToMany(() => Clinica, (clinica) => clinica.regional)
    clinica: Clinica[]
}