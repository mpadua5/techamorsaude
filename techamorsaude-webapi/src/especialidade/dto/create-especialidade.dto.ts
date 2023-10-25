import { ApiProperty } from "@nestjs/swagger";

export class CreateEspecialidadeDto {
    @ApiProperty()
    uuid: string
    @ApiProperty()
    especialidade: string
}