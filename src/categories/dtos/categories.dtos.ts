import { Timestamp } from '@google-cloud/firestore';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsEmpty } from 'class-validator';

export class CreateCategoriesDto {
  static collectionName = 'categories';

  @IsNotEmpty()
  @ApiProperty({ description: `Name of the category` })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Type of the category` })
  type: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Is this  category published?` })
  published: boolean;
}

export class GetCategoriesDto extends CreateCategoriesDto {
  @IsEmpty()
  @ApiProperty({ description: `Date of creation` })
  createdAt: Timestamp;

  @IsEmpty()
  @ApiProperty({ description: `Date of last update` })
  updatedAt: Timestamp;
}

export class UpdateCategoriesDto extends PartialType(GetCategoriesDto) {}
