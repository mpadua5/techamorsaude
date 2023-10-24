import { Injectable } from '@nestjs/common';
import { CreateRegionalDto } from './dto/create-regional.dto';
import { UpdateRegionalDto } from './dto/update-regional.dto';

@Injectable()
export class RegionalService {
  create(createRegionalDto: CreateRegionalDto) {
    return 'This action adds a new regional';
  }

  findAll() {
    return `This action returns all regional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} regional`;
  }

  update(id: number, updateRegionalDto: UpdateRegionalDto) {
    return `This action updates a #${id} regional`;
  }

  remove(id: number) {
    return `This action removes a #${id} regional`;
  }
}
