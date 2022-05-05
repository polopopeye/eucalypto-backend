import { Timestamp } from '@google-cloud/firestore';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsEmpty } from 'class-validator';

export class CreateStatusOffersDto {
  static collectionName = 'statusOffers';
  @IsOptional()
  id: string;

  @IsNotEmpty()
  @ApiProperty({ description: `id JobOffer status` })
  idJob: string;

  @IsNotEmpty()
  @ApiProperty({ description: `id User status` })
  idUser: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Status Job Offer` })
  status: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Description of the status job offer` })
  description: string;

  @IsOptional()
  @ApiProperty({ description: `Is this  job published?` })
  published: boolean;
}

export class StatusGetOffersDto extends CreateStatusOffersDto {
  @IsEmpty()
  @ApiProperty({ description: `Date of creation` })
  createdAt: Timestamp;

  @IsEmpty()
  @ApiProperty({ description: `Date of last update` })
  updatedAt: Timestamp;
}

export class StatusUpdateOffersDto extends PartialType(StatusGetOffersDto) {}
