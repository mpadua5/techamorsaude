import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClinicaModule } from './clinica/clinica.module';
import { RegionalModule } from './regional/regional.module';
import { EspecialidadeModule } from './especialidade/especialidade.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';

@Module({
  imports: [ClinicaModule, RegionalModule, EspecialidadeModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
