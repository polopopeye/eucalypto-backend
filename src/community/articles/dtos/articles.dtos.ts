import { Timestamp } from '@google-cloud/firestore';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsEmpty } from 'class-validator';

export class CreateArticlesDto {
  static collectionName = 'articles';

  @IsOptional()
  id: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Name of the article` })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Article in html` })
  article: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Author of the article` })
  author: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Cover Img of the article` })
  coverImg: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Description of the article` })
  description: string;

  @IsOptional()
  @ApiProperty({ description: `Tags/Categories of the article` })
  categories: Array<string>;

  @IsNotEmpty()
  @ApiProperty({ description: `Is this  articles published?` })
  published: boolean;
}

export class GetArticlesDto extends CreateArticlesDto {
  @IsEmpty()
  @ApiProperty({ description: `Date of creation` })
  createdAt: Timestamp;

  @IsEmpty()
  @ApiProperty({ description: `Date of last update` })
  updatedAt: Timestamp;
}

export class UpdateArticlesDto extends PartialType(GetArticlesDto) {}
