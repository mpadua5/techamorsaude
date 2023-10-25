import { ApiProperty } from "@nestjs/swagger";
import { CreateEspecialidadeDto } from "src/especialidade/dto/create-especialidade.dto";
import { CreateRegionalDto } from "src/regional/dto/create-regional.dto";

export class CreateClinicaDto {
    @ApiProperty()
    razaosocial: string;
    @ApiProperty()
    nomefantasia: string;
    @ApiProperty()
    cnpj: string;
    @ApiProperty()
    datainauguracao: Date;
    @ApiProperty()
    ativa: boolean;
    @ApiProperty()
    regional: CreateRegionalDto
    @ApiProperty()
    especialidade: CreateEspecialidadeDto[];
}
