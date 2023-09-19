import { Module } from '@nestjs/common';
import { ApplicationModule } from '@/application/application.module';
import { GoalController } from './goal/goal.controller';
import { BodyRecordController } from './bodyRecord/bodyRecord.contoroller';

@Module({
  imports: [ApplicationModule],
  controllers: [GoalController, BodyRecordController],
})
export class ControllerModule {}
