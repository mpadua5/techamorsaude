import { Module } from '@nestjs/common';
import { ClinicaService } from './clinica.service';
import { ClinicaController } from './clinica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinica } from './entities/clinica.entity';

@Module({
  controllers: [ClinicaController],
  providers: [ClinicaService],
  imports: [TypeOrmModule.forFeature([Clinica])]
})
export class ClinicaModule {}
