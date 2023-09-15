import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { GOAL_REPOSITORY } from '../interfaces/goal.type';
import { GoalRepositoryImpl } from '@/infrastructure/prisma_repository/goal/goal.repository';
import { BODYRECORD_REPOSITORY } from '../interfaces/bodyRecord.type';
import { BodyRecordRepositoryImpl } from './bodyRecord/bodyRecord.repository';
import { DIARY_REPOSITORY } from '../interfaces/diary.type';
import { DiaryRepositoryImpl } from './diary/diary.repository';
import { ExerciseRecordRepositoryImpl } from './exerciseRecord/exercise.repository';
import { EXERCISERECORD_REPOSITORY } from '../interfaces/exerciseRecord.type';
@Module({
  providers: [
    PrismaService,
    { provide: GOAL_REPOSITORY, useClass: GoalRepositoryImpl },
    { provide: BODYRECORD_REPOSITORY, useClass: BodyRecordRepositoryImpl },
    { provide: DIARY_REPOSITORY, useClass: DiaryRepositoryImpl },
    { provide: EXERCISERECORD_REPOSITORY, useClass: ExerciseRecordRepositoryImpl },
  ],
  exports: [
    GOAL_REPOSITORY,
    BODYRECORD_REPOSITORY,
    DIARY_REPOSITORY,
    EXERCISERECORD_REPOSITORY,
  ],
})
export class PrismaRepositoryModule {}
