import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { BorrowingsModule } from './borrowings/borrowings.module';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { MembersModule } from './members/members.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [MemberModule, MembersModule, BooksModule, BorrowingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
