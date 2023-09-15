import { Get, Param, Post, Body, Controller } from '@nestjs/common';
import { ExercisePostRequest } from './request.interface';
import { ExerciseGetResponse } from './response.interface';
import { ExerciseRecordUseCase } from '@/application/usecase/exerciseRecord/exerciseRecord.usecase';

@Controller('')
export class ExerciseRecordController {
    constructor(private readonly exerciseRecordUseCase: ExerciseRecordUseCase) {}

    @Get('users/:userId/dates/:date/exerciseRecord')
    async get(
        @Param('userId') userId: string,
        @Param('date') date: string,
    ): Promise<ExerciseGetResponse> {
        const exercise = await this.exerciseRecordUseCase.findByUserId(userId, new Date(date));
        return exercise;
    }
    @Post('users/:userId/dates/:date/exercise/create')
    async post(
        @Param('userId') userId: string,
        @Param('date') date: string,
        @Body() createExerciseRequest: ExercisePostRequest,
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
}
