import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { GOAL_REPOSITORY } from '../interfaces/goal.type';
import { GoalRepositoryImpl } from '@/infrastructure/prisma_repository/goal/goal.repository';
import { BODYRECORD_REPOSITORY } from '../interfaces/bodyRecord.type';
import { BodyRecordRepositoryImpl } from './bodyRecord/bodyRecord.repository';
import { DIARY_REPOSITORY } from '../interfaces/diary.type';
<<<<<<< HEAD
import { DiaryRepositoryImpl } from './diary/diary_repository';
=======
import { DiaryRepository } from '../interfaces/diary.type';
import { CreateDiaryRepositoryImpl } from './diary/diary_repository';
>>>>>>> 0684630 (PostRequest以外をコミット)
@Module({
  providers: [
    PrismaService,
    { provide: GOAL_REPOSITORY, useClass: GoalRepositoryImpl },
    { provide: BODYRECORD_REPOSITORY, useClass: BodyRecordRepositoryImpl},
<<<<<<< HEAD
    { provide: DIARY_REPOSITORY, useClass: DiaryRepositoryImpl}
=======
    { provide: DIARY_REPOSITORY, useClass: CreateDiaryRepositoryImpl}
>>>>>>> 0684630 (PostRequest以外をコミット)
  ],
  exports: [GOAL_REPOSITORY, BODYRECORD_REPOSITORY, DIARY_REPOSITORY],
})
export class PrismaRepositoryModule {}
