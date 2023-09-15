import { DiaryRepository } from '@/infrastructure/interfaces/diary.type';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { diary } from '@/domain/diary.type';

@Injectable()
export class DiaryRepositoryImpl implements DiaryRepository {
  constructor(private readonly prisma: PrismaService) {}
  async updateByUserId(updateDiary: diary) {
    return this.prisma.diary.update({
      where: {
        userId_date: {
          userId: updateDiary.userId,
          date: updateDiary.date,
        },
      },
      data: {
        contents: updateDiary.contents,
      },
    });
  }
  async findByUserId(findDiary: diary) {
    return this.prisma.diary.findUnique({
      select: { userId: true, date: true, contents: true },
      where: { userId_date: { userId: findDiary.userId, date: findDiary.date } },
    });
  }
}
