import { Module } from '@nestjs/common';
import { EspecialidadeService } from './especialidade.service';
import { EspecialidadeController } from './especialidade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especialidade } from './entities/especialidade.entity';

@Module({
  controllers: [EspecialidadeController],
  providers: [EspecialidadeService],
  imports: [TypeOrmModule.forFeature([Especialidade])]
})
export class EspecialidadeModule {}
