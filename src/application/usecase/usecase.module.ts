import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { GoalUseCase } from '@/application/usecase/goal/goal.usecase';
import { BodyRecordUseCase } from './bodyRecord/bodyRecord.usecases';
import { DiaryUseCase } from './diary/diary.usecase';
import { ExerciseUseCase } from './exercise/exercise.usecase';
@Module({
  imports: [InfrastructureModule],
  providers: [GoalUseCase, BodyRecordUseCase, DiaryUseCase, ExerciseUseCase],
  exports: [GoalUseCase, BodyRecordUseCase, DiaryUseCase, ExerciseUseCase],
})
export class UseCaseModule {}
