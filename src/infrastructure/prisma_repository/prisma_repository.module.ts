import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { GOAL_REPOSITORY } from '../interfaces/goal.type';
import { GoalRepositoryImpl } from '@/infrastructure/prisma_repository/goal/goal.repository';

@Module({
  providers: [
    PrismaService,
    { provide: GOAL_REPOSITORY, useClass: GoalRepositoryImpl },
  ],
  exports: [GOAL_REPOSITORY],
})
export class PrismaRepositoryModule {}
