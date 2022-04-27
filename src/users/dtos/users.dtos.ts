import { Timestamp } from '@google-cloud/firestore';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsEmpty } from 'class-validator';

export class CreateUserDto {
  static collectionName = 'users';

  @IsNotEmpty()
  @ApiProperty({ description: `Name of the user` })
  name: string;

  @IsOptional()
  @ApiProperty({ description: `Surnames of the user` })
  surnames: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Displayname of the user` })
  displayName: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Langs of the user` })
  languages: Array<string>;

  @IsNotEmpty()
  @ApiProperty({ description: `Techs/cats of the user` })
  categories: Array<string>;

  @IsNotEmpty()
  @ApiProperty({ description: `role of the user` })
  role: string;

  @IsOptional()
  @ApiProperty({ description: `job offers data` })
  jobOffers: Array<object>;

  @IsNotEmpty()
  @ApiProperty({ description: `Cover Image/Profile Photo of the user` })
  coverImg: string;

  @IsOptional()
  @ApiProperty({ description: `Web of the user` })
  web: string;

  @IsOptional()
  @ApiProperty({ description: `LinkedIn of the user` })
  linkedIn: string;

  @IsOptional()
  @ApiProperty({ description: `email of the user` })
  email: string;

  @IsOptional()
  @ApiProperty({ description: `phone of the user` })
  phone: string;

  @IsOptional()
  @ApiProperty({ description: `github of the user` })
  github: string;

  @IsNotEmpty()
  @ApiProperty({ description: `location of the user` })
  location: string;

  @IsNotEmpty()
  @ApiProperty({ description: `Is this  user published?` })
  published: boolean;
}

export class GetUserDto extends CreateUserDto {
  @IsEmpty()
  @ApiProperty({ description: `Date of creation` })
  createdAt: Timestamp;

  @IsEmpty()
  @ApiProperty({ description: `Date of last update` })
  updatedAt: Timestamp;
}

export class UpdateUserDto extends PartialType(GetUserDto) {}
