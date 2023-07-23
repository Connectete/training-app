import { Module } from '@nestjs/common';
import { InfrastructureModule } from '@/infrastructure/infrastructure.module';
import { GoalUseCase } from '@/application/usecase/goal/goal.usecase';

@Module({
  imports: [InfrastructureModule],
  providers: [GoalUseCase],
  exports: [GoalUseCase],
})
export class GoalModule {}
