import { Get, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Regional } from './entities/regional.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegionalService {
  constructor(
    @InjectRepository(Regional)
    private regionalRepository: Repository<Regional>
  ){}
  
  findAll() {
    return this.regionalRepository.find();
  }

  findOne(uuid: string) {
    return this.regionalRepository.findOneBy({ uuid: uuid });
  }
}
