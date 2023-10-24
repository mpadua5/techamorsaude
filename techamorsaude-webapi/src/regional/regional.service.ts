import { Injectable } from '@nestjs/common';

@Injectable()
export class RegionalService {
  findAll() {
    return `This action returns all regional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} regional`;
  }
}
