import { Timestamp } from '@google-cloud/firestore';
import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

export class TodoDto {
  static collectionName = 'test';

  name: string;
  dueDate: Timestamp;
}

// import { PartialType } from '@nestjs/swagger';

// export class CreateBrandDto {
//   @IsString()
//   @IsNotEmpty()
//   readonly name: string;

//   @IsUrl()
//   @IsNotEmpty()
//   readonly image: string;
// }

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
