import { Timestamp } from '@google-cloud/firestore';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsEmpty } from 'class-validator';

export class CreateCompanyDto {
  static collectionName = 'companies';

  @IsNotEmpty()
  @ApiProperty({ description: `Name of the company` })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Description of the company` })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Cover Image/Logo of the company` })
  coverImg: string;

  @IsOptional()
  @ApiProperty({ description: `Web of the company` })
  web: string;

  @IsOptional()
  @ApiProperty({ description: `LinkedIn of the company` })
  linkedIn: string;

  @IsOptional()
  @ApiProperty({ description: `email of the company` })
  email: string;

  @IsOptional()
  @ApiProperty({ description: `phone of the company` })
  phone: string;

  @IsNotEmpty()
  @ApiProperty({ description: `country of the company` })
  country: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Owners of the company` })
  owners: Array<string>;

  @IsNotEmpty()
  @ApiProperty({ description: `Is this  company published?` })
  published: boolean;
}

export class GetCompanyDto extends CreateCompanyDto {
  @IsEmpty()
  @ApiProperty({ description: `Date of creation` })
  createdAt: Timestamp;

  @IsEmpty()
  @ApiProperty({ description: `Date of last update` })
  updatedAt: Timestamp;
}

export class UpdateCompanyDto extends PartialType(GetCompanyDto) {}
