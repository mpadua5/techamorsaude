import { Especialidade } from "src/especialidade/entities/especialidade.entity";
import { Regional } from "src/regional/entities/regional.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('clinica')
export class Clinica {
    @PrimaryGeneratedColumn("uuid")
    uuid: string;
    @Column()
    razaosocial: string;
    @Column()
    nomefantasia: string;
    @Column()
    cnpj: number;
    @Column()
    datainauguracao: Date;
    @Column()
    ativa: boolean;
    
    @ManyToOne(() => Regional, (regional) => regional.clinica, { nullable: false })
    regional: Regional

    @ManyToMany(() => Especialidade, (especialidade) => especialidade.clinica)
    @JoinTable({
        name: "clinica_especialidade"
    })
    especialidade: Especialidade[];
}
