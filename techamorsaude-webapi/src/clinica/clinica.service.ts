import { Injectable } from '@nestjs/common';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { UpdateClinicaDto } from './dto/update-clinica.dto';

@Injectable()
export class ClinicaService {
  create(createClinicaDto: CreateClinicaDto) {
    return 'This action adds a new clinica';
  }

  findAll() {
    return `This action returns all clinica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clinica`;
  }

  update(id: number, updateClinicaDto: UpdateClinicaDto) {
    return `This action updates a #${id} clinica`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinica`;
  }
}
