import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { UpdateClinicaDto } from './dto/update-clinica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Clinica } from './entities/clinica.entity';
import { Repository } from 'typeorm';
import { ok } from 'assert';

@Injectable()
export class ClinicaService {
  constructor(
    @InjectRepository(Clinica)
    private clinicaRepository: Repository<Clinica>,
  ) {}

  async create(createClinicaDto: CreateClinicaDto) {
    try {
      return await this.clinicaRepository.save(createClinicaDto);
    } catch (error) {
      throw new InternalServerErrorException(error.message || error.driverError.message)
    }
  }

  async findAll() {
    return await this.clinicaRepository.find();
  }

  async findOne(uuid: string) {
    return await this.clinicaRepository.findOneBy({ uuid: uuid});
  }

  async update(uuid: string, updateClinicaDto: UpdateClinicaDto) {
    try {
      const clinica = await this.clinicaRepository.findOneBy({ uuid: uuid })
      if (clinica) {
        await this.clinicaRepository.update(uuid, updateClinicaDto);
        return "Atualizado com Sucesso!"
      }else {
        throw new BadRequestException("Clinica não encontrada")
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message || error.driverError.message)
    }
  }

  async remove(uuid: string) {
    try {
      const clinica = await this.clinicaRepository.findOneBy({ uuid: uuid })
      if (clinica) {
        await this.clinicaRepository.delete({ uuid: uuid });
        return "Deletado com Sucesso!"
      }else {
        throw new BadRequestException("Clinica não encontrada")
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message || error.driverError.message)
    }
  }
}
