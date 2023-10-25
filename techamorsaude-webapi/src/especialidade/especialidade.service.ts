import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Especialidade } from './entities/especialidade.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EspecialidadeService {
  constructor(
    @InjectRepository(Especialidade)
    private readonly especialidadeRepository: Repository<Especialidade>
  ){}

  findAll() {
    return this.especialidadeRepository.find();
  }  
}
