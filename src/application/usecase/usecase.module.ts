import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { GoalUseCase } from '@/application/usecase/goal/goal.usecase';
import { BodyRecordUseCase } from './bodyRecord/bodyRecord.usecases';
import { DiaryUseCase } from './diary/diary.usecase';
@Module({
  imports: [InfrastructureModule],
  providers: [GoalUseCase,BodyRecordUseCase,DiaryUseCase],
  exports: [GoalUseCase,BodyRecordUseCase,DiaryUseCase],
})
export class UseCaseModule {}
