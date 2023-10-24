import { Clinica } from 'src/clinica/entities/clinica.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('regional')
export class Regional {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
  
  @Column()
  regional: string;

  @OneToMany(() => Clinica, (clinica) => clinica.regional)
  clinica: Clinica[];
}
