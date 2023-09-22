import { Module } from '@nestjs/common';
import { ApplicationModule } from '@/application/application.module';
import { GoalController } from './goal/goal.controller';
import { BodyRecordController } from './bodyRecord/bodyRecord.contoroller';
import { DiaryController } from './diary/diary.controller';
import { ExerciseRecordController } from './exerciseRecord/exerciseRecord.controller';
import { DietController } from './diet/diet.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [
    GoalController,
    BodyRecordController,
    DiaryController,
    ExerciseRecordController,
    DietController,
  ],
})
export class ControllerModule {}
