import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { GoalUseCase } from '@/application/usecase/goal/goal.usecase';
import { BodyRecordUseCase } from './bodyRecord/bodyRecord.usecases';
@Module({
  imports: [InfrastructureModule],
  providers: [GoalUseCase, BodyRecordUseCase],
  exports: [GoalUseCase, BodyRecordUseCase],
})
export class UseCaseModule {}
