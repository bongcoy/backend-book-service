import { IsString } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  readonly code: string;

  @IsString()
  readonly name: string;
}
