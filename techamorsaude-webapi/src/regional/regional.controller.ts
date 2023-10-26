import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { RegionalService } from './regional.service';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('regional')
export class RegionalController {
  constructor(private readonly regionalService: RegionalService) {}

  @Get()
  findAll() {
    return this.regionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('uuid') uuid: string) {
    return this.regionalService.findOne(uuid);
  }
}
