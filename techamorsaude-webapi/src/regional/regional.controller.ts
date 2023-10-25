import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegionalService } from './regional.service';

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
