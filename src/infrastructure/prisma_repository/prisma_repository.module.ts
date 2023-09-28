import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { GOAL_REPOSITORY } from '../interfaces/goal.type';
import { GoalRepositoryImpl } from '@/infrastructure/prisma_repository/goal/goal.repository';
import { BODYRECORD_REPOSITORY } from '../interfaces/bodyRecord.type';
import { BodyRecordRepositoryImpl } from './bodyRecord/bodyRecord.repository';
import { DIET_REPOSITORY } from '../interfaces/diet.type';
import { DietRepositoryImpl } from './diet/diet.repository';
@Module({
  providers: [
    PrismaService,
    { provide: GOAL_REPOSITORY, useClass: GoalRepositoryImpl },
    { provide: BODYRECORD_REPOSITORY, useClass: BodyRecordRepositoryImpl },
    { provide: DIET_REPOSITORY, useClass: DietRepositoryImpl},
  ],
  exports: [GOAL_REPOSITORY, BODYRECORD_REPOSITORY, DIET_REPOSITORY],
})
export class PrismaRepositoryModule {}
