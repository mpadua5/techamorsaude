import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegionalService } from './regional.service';
import { CreateRegionalDto } from './dto/create-regional.dto';
import { UpdateRegionalDto } from './dto/update-regional.dto';

@Controller('regional')
export class RegionalController {
  constructor(private readonly regionalService: RegionalService) {}

  @Post()
  create(@Body() createRegionalDto: CreateRegionalDto) {
    return this.regionalService.create(createRegionalDto);
  }

  @Get()
  findAll() {
    return this.regionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionalDto: UpdateRegionalDto) {
    return this.regionalService.update(+id, updateRegionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionalService.remove(+id);
  }
}
