import { Module } from '@nestjs/common';
import { ApplicationModule } from '@/application/application.module';
import { GoalController } from './goal/goal.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [GoalController],
})
export class ControllerModule {}
