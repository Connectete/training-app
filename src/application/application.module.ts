import { Module } from '@nestjs/common';
import { UseCaseModule } from '@/application/usecase/usecase.module';

@Module({
  imports: [UseCaseModule],
  exports: [UseCaseModule],
})
export class ApplicationModule {}
