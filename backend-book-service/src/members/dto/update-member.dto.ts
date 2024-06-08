import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberDto } from './create-member.dto';

// Don't need to fill anything in the class body.
// The PartialType utility automatically handles
// making all properties of the CreateMemberDto optional,
// so the class body can remain empty.
export class UpdateMemberDto extends PartialType(CreateMemberDto) {}
