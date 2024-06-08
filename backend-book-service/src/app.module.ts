import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';
import { BorrowingsModule } from './borrowings/borrowings.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [MembersModule, MembersModule, BooksModule, BorrowingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
