import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { GoalUseCase } from '@/application/usecase/goal/goal.usecase';
import { BodyRecordUseCase } from './bodyRecord/bodyRecord.usecases';
<<<<<<< HEAD
import { DiaryUseCase } from './diary/diary.usecase';
@Module({
  imports: [InfrastructureModule],
  providers: [GoalUseCase, BodyRecordUseCase, DiaryUseCase],
  exports: [GoalUseCase, BodyRecordUseCase, DiaryUseCase],
=======
import { DiaryUseCase } from './diary/diary.usecases';
@Module({
  imports: [InfrastructureModule],
  providers: [GoalUseCase,BodyRecordUseCase,DiaryUseCase],
  exports: [GoalUseCase,BodyRecordUseCase,DiaryUseCase],
>>>>>>> 0684630 (PostRequest以外をコミット)
})
export class UseCaseModule {}
