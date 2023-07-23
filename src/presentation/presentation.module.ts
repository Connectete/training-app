import { Module } from '@nestjs/common';
import { ControllerModule } from '@/presentation/controller/controller.module';

@Module({
  imports: [ControllerModule],
})
export class PresentationModule {}
