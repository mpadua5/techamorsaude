import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionalDto {
    @ApiProperty()
    uuid: string
    @ApiProperty()
    regional: string
}