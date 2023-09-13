import { Module } from '@nestjs/common';
import { ApplicationModule } from '@/application/application.module';
import { GoalController } from './goal/goal.controller';
import { BodyRecordController } from './bodyRecord/bodyRecord.contoroller';
import { DiaryController } from './diary/diary.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [GoalController, BodyRecordController, DiaryController],
})
export class ControllerModule {}
