import { Module } from '@nestjs/common';
import { BorrowingsService } from './borrowings.service';
import { BorrowingsController } from './borrowings.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BorrowingsController],
  providers: [BorrowingsService, PrismaService],
})
export class BorrowingsModule {}
