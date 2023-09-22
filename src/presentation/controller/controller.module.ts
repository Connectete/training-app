import { Module } from '@nestjs/common';
import { ApplicationModule } from '@/application/application.module';
import { GoalController } from './goal/goal.controller';
import { BodyRecordController } from './bodyRecord/bodyRecord.contoroller';
import { DietController } from './diet/diet.controller';
@Module({
  imports: [ApplicationModule],
  controllers: [GoalController, BodyRecordController,DietController],
})
export class ControllerModule {}
