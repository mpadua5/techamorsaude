import { Controller, Get, UseGuards } from '@nestjs/common';
import { EspecialidadeService } from './especialidade.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('especialidade')
export class EspecialidadeController {
  constructor(private readonly especialidadeService: EspecialidadeService) {}

  @Get()
  findAll() {
    return this.especialidadeService.findAll();
  }  
}
