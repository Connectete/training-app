import { Module } from '@nestjs/common';
import { ApplicationModule } from '@/application/application.module';
import { GoalController } from './goal/goal.controller';
import { BodyRecordController } from './bodyRecord/bodyRecord.contoroller';
import { DiaryController } from './diary/diary.controller';

@Module({
  imports: [ApplicationModule],
<<<<<<< HEAD
  controllers: [GoalController,BodyRecordController,DiaryController],
=======
  controllers: [GoalController,BodyRecordController,DiaryController], 
>>>>>>> 0684630 (PostRequest以外をコミット)
})
export class ControllerModule {}
