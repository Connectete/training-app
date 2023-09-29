import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { GoalUseCase } from '@/application/usecase/goal/goal.usecase';
import { BodyRecordUseCase } from './bodyRecord/bodyRecord.usecases';
import { DiaryUseCase } from './diary/diary.usecase';
import { ExerciseRecordUseCase } from './exerciseRecord/exerciseRecord.usecase';
import { DietUseCase } from './diet/diet.usecase';
import { AccountUseCase } from './account/account.usecase';
@Module({
  imports: [InfrastructureModule],
  providers: [GoalUseCase, BodyRecordUseCase, DiaryUseCase, ExerciseRecordUseCase, DietUseCase, AccountUseCase],
  exports: [GoalUseCase, BodyRecordUseCase, DiaryUseCase, ExerciseRecordUseCase, DietUseCase, AccountUseCase],
})
export class UseCaseModule {}
