import { Timestamp } from '@google-cloud/firestore';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsUrl,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsEmpty,
} from 'class-validator';

export class CreateOffersDto {
  static collectionName = 'offers';

  @IsNotEmpty()
  @ApiProperty({ description: `Page Offer tittle` })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Company Name of the offer job` })
  company: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Job Offer tittle` })
  job: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Location name of the offer` })
  location: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Is a remote job offer?` })
  remote: boolean;

  @IsNotEmpty()
  @ApiProperty({ description: `Description of the job offer` })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Salary of the job offer` })
  salary: string;

  @IsOptional()
  @ApiProperty({ description: `Techs/Categories of the job offer` })
  categories: Array<string>;

  @IsOptional()
  @ApiProperty({ description: `Date of deadline` })
  endTime: Timestamp;

  @IsOptional()
  @ApiProperty({ description: `Is this  job published?` })
  published: boolean;
}

export class GetOffersDto extends CreateOffersDto {
  @IsOptional()
  @ApiProperty({ description: `Applicants list` })
  aplicants: Array<string>;

  @IsEmpty()
  @ApiProperty({ description: `Date of creation` })
  createdAt: Timestamp;

  @IsEmpty()
  @ApiProperty({ description: `Date of last update` })
  updatedAt: Timestamp;
}

export class UpdateOffersDto extends PartialType(GetOffersDto) {}
