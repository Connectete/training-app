import { Get, Param, Post, Put, Body, Controller } from '@nestjs/common';
import {
  ExerciseRecordCreateRequest,
  ExerciseRecordUpdateRequest,
} from './request.interface';
import {
  ExerciseGetResponse,
  ExerciseGetAllResponse,
} from './response.interface';
import { ExerciseRecordUseCase } from '@/application/usecase/exerciseRecord/exerciseRecord.usecase';
import { ExerciseRecordGet } from '@/domain/exerciseRecord.type';

@Controller('')
export class ExerciseRecordController {

  constructor(private readonly exerciseRecordUseCase: ExerciseRecordUseCase) {}
  @Post('users/:userId/dates/:date/exerciseRecord/create')
  async post(
    @Param('userId') userId: string,
    @Param('date') date: string,
    @Body() createExerciseRequest: ExerciseRecordCreateRequest,
  ): Promise<boolean> {
    const exercise = await this.exerciseRecordUseCase.createExerciseRecord({
      userId: userId,
      date: new Date(date),
      timeCount: createExerciseRequest.timeCount,
      exerciseId: createExerciseRequest.exerciseId,
      calorie: createExerciseRequest.calorie,
    });
    return exercise;
  }
  @Get('users/:userId/exerciseRecord/all')
  async getAll(
    @Param('userId') userId: string,
  ): Promise<ExerciseGetAllResponse> {
    const exercise = await this.exerciseRecordUseCase.findAllByUserId(userId);
    return exercise;
  }
  @Put('users/:userId/dates/:date/exerciseId/:exerciseId/exerciseRecord/update')
  async put(
    @Param('userId') userId: string,
    @Param('date') date: string,
    @Param('exerciseId') exerciseId: string,
    @Body() updateExerciseRequest: ExerciseRecordUpdateRequest,
  ): Promise<boolean> {
    const parsedExerciseId = parseInt(exerciseId, 10);
    const exerciseRecord =
      await this.exerciseRecordUseCase.updateExerciseRecord({
        userId: userId,
        date: new Date(date),
        timeCount: updateExerciseRequest.timeCount,
        exerciseId: parsedExerciseId,
        calorie: updateExerciseRequest.calorie,
      });
    return exerciseRecord;
  }
    @Get('users/:userId/exerciseRecord')
    async get(
        @Param('userId') userId: string,
    ): Promise<Array<{date: string, exercise: ExerciseGetResponse[]}> > {
        const getExerciseRecord = await this.exerciseRecordUseCase.findByUserId(userId);
        if (!getExerciseRecord) {
            return null;
        }
        const result: Array<{date: string, exercise: ExerciseGetResponse[]}> = [];
        for (const date in getExerciseRecord) {
            const records = getExerciseRecord[date];
            const dailyRecords: ExerciseGetResponse[] = records.map((record: ExerciseRecordGet) => ({
                userId: record.userId,
                timeCount: record.timeCount,
                exercise: record.exercise,
                calorie: record.calorie,
            }));
            result.push({date: date, exercise: dailyRecords});
        }
        return result;
    }
}
