import { Module } from '@nestjs/common';
import { ApplicationModule } from '@/application/application.module';
import { GoalController } from './goal/goal.controller';
import { BodyRecordController } from './bodyRecord/bodyRecord.contoroller';
import { DiaryController } from './diary/diary.controller';
import { ExerciseController } from './exercise/exercise.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [
    GoalController,
    BodyRecordController,
    DiaryController,
    ExerciseController,
  ],
})
export class ControllerModule {}
