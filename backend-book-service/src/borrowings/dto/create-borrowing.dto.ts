import { IsString } from 'class-validator';

export class CreateBorrowingDto {
  @IsString()
  readonly memberId: string;

  @IsString()
  readonly bookId: string;
}
