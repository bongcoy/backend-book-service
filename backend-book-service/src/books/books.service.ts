import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  create(createBookDto: CreateBookDto) {
    return this.prisma.book.create({ data: createBookDto });
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(code: string) {
    return this.prisma.book.findUnique({ where: { code } });
  }

  update(code: string, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({ where: { code }, data: updateBookDto });
  }

  remove(code: string) {
    return this.prisma.book.delete({ where: { code } });
  }
}
