import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose, Transform } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { RaceType } from 'general/enums/race-types.enum';
import { Translations } from 'general/interfaces/translations.interface';
import { enumToString } from 'general/utils/enum-to-string.utils';
import { getTranslation } from 'general/utils/translation.utils';

export class GetLocationConfigsQueryDtoV2 {
  @ApiPropertyOptional({
    description: `Race type: ${enumToString(RaceType)}`,
    enum: RaceType,
  })
  @IsEnum(RaceType)
  @Transform(({ value }) => Number(value))
  c_race_type?: RaceType;
}

@Exclude()
export class GetLocationConfigsResponseDtoV2 {
  @Expose()
  @ApiProperty({
    description: 'Location config id',
  })
  location_config_id: number;

  @Expose()
  @ApiProperty({
    description: 'Location id',
  })
  location_id: number;

  @Expose()
  @ApiProperty({
    description: 'Location name',
    type: 'string',
  })
  @Transform(({ value }) => getTranslation(value))
  name: Translations;

  @Expose()
  @ApiProperty({
    description: 'Location config image',
    type: 'string',
  })
  @Transform(({ value }) => value && value.toString('base64'))
  image: string;

  @Expose()
  @ApiProperty({
    description: 'Location config description',
    type: 'string',
  })
  @Transform(({ value }) => getTranslation(value))
  description: Translations;

  @Expose()
  @ApiProperty({
    description: 'Location config length',
    type: 'number',
  })
  length: number;

  @Expose()
  @ApiProperty({
    description: 'Location config difficulty',
    type: 'number',
  })
  difficulty: number;

  constructor(partial: Partial<GetLocationConfigsResponseDtoV2>) {
    Object.assign(this, partial);
  }
}
