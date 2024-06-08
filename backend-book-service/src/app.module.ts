import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';
import { BooksModule } from './books/books.module';
import { BorrowingsModule } from './borrowings/borrowings.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [MembersModule, BooksModule, BorrowingsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
