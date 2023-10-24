import { Module } from '@nestjs/common';
import { ClinicaService } from './clinica.service';
import { ClinicaController } from './clinica.controller';

@Module({
  controllers: [ClinicaController],
  providers: [ClinicaService],
})
export class ClinicaModule {}
