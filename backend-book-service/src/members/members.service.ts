import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}

  create(createMemberDto: CreateMemberDto) {
    return this.prisma.member.create({ data: createMemberDto });
  }

  findAll() {
    return this.prisma.member.findMany();
  }

  findOne(code: string) {
    return this.prisma.member.findUnique({ where: { code } });
  }

  update(code: string, updateMemberDto: UpdateMemberDto) {
    return this.prisma.member.update({
      where: { code },
      data: updateMemberDto,
    });
  }

  remove(code: string) {
    return this.prisma.member.delete({ where: { code } });
  }
}
