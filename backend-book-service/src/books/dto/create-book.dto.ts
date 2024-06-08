import { IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  readonly code: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly author: string;

  @IsNumber()
  readonly stock: number;
}
