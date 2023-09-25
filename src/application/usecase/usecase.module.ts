import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { GoalUseCase } from '@/application/usecase/goal/goal.usecase';
import { BodyRecordUseCase } from './bodyRecord/bodyRecord.usecases';
import { DietUseCase } from './diet/diet.usecase';
@Module({
  imports: [InfrastructureModule],
  providers: [GoalUseCase, BodyRecordUseCase, DietUseCase],
  exports: [GoalUseCase, BodyRecordUseCase, DietUseCase],
})
export class UseCaseModule {}
