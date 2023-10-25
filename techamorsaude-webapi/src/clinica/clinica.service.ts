import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { UpdateClinicaDto } from './dto/update-clinica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Clinica } from './entities/clinica.entity';
import { Repository } from 'typeorm';
import { CreateEspecialidadeDto } from 'src/especialidade/dto/create-especialidade.dto';
import { Especialidade } from 'src/especialidade/entities/especialidade.entity';

const MINIMO_ESPECIALIDADE: number = 5;

@Injectable()
export class ClinicaService {
  constructor(
    @InjectRepository(Clinica)
    private clinicaRepository: Repository<Clinica>,
  ) {}

  async create(createClinicaDto: CreateClinicaDto) {
    try {
      this.validateRulesInsert(createClinicaDto);
      return await this.clinicaRepository.save(createClinicaDto);
    } catch (error) {
      throw new BadRequestException(error.message || error.driverError.message);
    }
  }

  async findAll() {
    return await this.clinicaRepository.find({
      relations: {
        regional: true,
        especialidade: true,
      },
    });
  }

  async findOne(uuid: string) {
    return await this.clinicaRepository
      .createQueryBuilder('clinica')
      .where('clinica.uuid = :uuid', { uuid: uuid })
      .leftJoinAndSelect('clinica.regional', 'regional')
      .leftJoinAndSelect('clinica.especialidade', 'especialidade')
      .getOne();
  }

  async update(uuid: string, updateClinicaDto: UpdateClinicaDto) {
    const clinica = await this.clinicaRepository.findOneBy({ uuid: uuid });

    if (!clinica) throw new BadRequestException('Clinica não encontrada');

    try {
      this.validateRulesUpdate(updateClinicaDto);
      
      if (updateClinicaDto.especialidade) {
        clinica.especialidade = updateClinicaDto.especialidade.map(item => {
          return {
            uuid: item.uuid,
            especialidade: item.especialidade
          } as Especialidade
        })        
        await this.clinicaRepository.save(clinica);
        delete updateClinicaDto.especialidade;
      }
      await this.clinicaRepository.update(uuid, updateClinicaDto)
      return 'Atualizado com Sucesso!';
    } catch (error) {
      throw new BadRequestException(error.message || error.driverError.message);
    }
  }

  async remove(uuid: string) {
    const clinica = await this.clinicaRepository.findOneBy({ uuid: uuid });
    
    if (!clinica) throw new BadRequestException('Clinica não encontrada');

    try {
      await this.clinicaRepository.delete({ uuid: uuid });
      return 'Deletado com Sucesso!';
    } catch (error) {
      throw new BadRequestException(
        error.message || error.driverError.message,
      );
    }
  }

  validateRulesInsert(dto: CreateClinicaDto): void {
    const { especialidade } = dto;
    if (especialidade.length < MINIMO_ESPECIALIDADE)
      throw new BadRequestException(
        'Numero minimo de especialidade, não foi alcançado',
      );
  }

  validateRulesUpdate(dto: UpdateClinicaDto): void {
    const { especialidade } = dto;
    if (especialidade && especialidade.length < MINIMO_ESPECIALIDADE)
      throw new BadRequestException(
        'Numero minimo de especialidade, não foi alcançado',
      );
  }
}
