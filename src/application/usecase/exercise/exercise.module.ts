import { Module } from '@nestjs/common';
import { InfrastructureModule } from '@/infrastructure/infrastructure.module';
import { ExerciseUseCase } from './exercise.usecase';

@Module({
  imports: [InfrastructureModule],
  providers: [ExerciseUseCase],
  exports: [ExerciseUseCase],
})
export class ExerciseModule {}
