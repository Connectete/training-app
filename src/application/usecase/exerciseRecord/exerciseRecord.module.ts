import { Module } from '@nestjs/common';
import { InfrastructureModule } from '@/infrastructure/infrastructure.module';
import { ExerciseRecordUseCase } from './exerciseRecord.usecase';

@Module({
  imports: [InfrastructureModule],
  providers: [ExerciseRecordUseCase],
  exports: [ExerciseRecordUseCase],
})
export class ExerciseModule {}
