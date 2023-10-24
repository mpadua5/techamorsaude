import { Module } from '@nestjs/common';
import { RegionalService } from './regional.service';
import { RegionalController } from './regional.controller';

@Module({
  controllers: [RegionalController],
  providers: [RegionalService],
})
export class RegionalModule {}
