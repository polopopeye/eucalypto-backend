import { Timestamp } from '@google-cloud/firestore';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsEmpty } from 'class-validator';

export class CreateEventsDto {
  static collectionName = 'events';

  @IsNotEmpty()
  @ApiProperty({ description: `Name of the event` })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Organization/Company in charge` })
  organizator: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Location name of the event` })
  location: string;

  @IsOptional()
  @ApiProperty({ description: `state/poblation` })
  state: string;

  @IsOptional()
  @ApiProperty({ description: `Postal Code zip code` })
  ZIPcode: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Country name of the offer` })
  country: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Cover Img of the event` })
  coverImg: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Description of the event` })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ description: `price of the event` })
  price: string;

  @IsOptional()
  @ApiProperty({ description: `Tags/Categories of the event` })
  categories: Array<string>;

  @IsOptional()
  @ApiProperty({ description: `Date of finish` })
  endTime: Timestamp;

  @IsNotEmpty()
  @ApiProperty({ description: `Date of start` })
  iniTime: Timestamp;

  @IsNotEmpty()
  @ApiProperty({ description: `Is this  event published?` })
  published: boolean;
}

export class GetEventsDto extends CreateEventsDto {
  @IsOptional()
  @ApiProperty({ description: `Assistants list` })
  assistants: Array<string>;

  @IsEmpty()
  @ApiProperty({ description: `Date of creation` })
  createdAt: Timestamp;

  @IsEmpty()
  @ApiProperty({ description: `Date of last update` })
  updatedAt: Timestamp;
}

export class UpdateEventsDto extends PartialType(GetEventsDto) {}
