import { Get, Param, Controller } from '@nestjs/common';

import { ExerciseGetResponse,Exercise } from './response.interface';
import { ExerciseRecordUseCase } from '@/application/usecase/exerciseRecord/exerciseRecord.usecase';


@Controller('')
export class ExerciseRecordController {
    constructor(private readonly exerciseRecordUseCase: ExerciseRecordUseCase) {}

    @Get('users/:userId/exerciseRecord')
    async get(
        @Param('userId') userId: string,
    ): Promise<ExerciseGetResponse> {
        const getExerciseRecord = await this.exerciseRecordUseCase.findByUserId(userId);
        return {
            userId: getExerciseRecord.userId,
            date: getExerciseRecord.date,
            timeCount: getExerciseRecord.timeCount,
            exercise: getExerciseRecord.exercise,
            calorie: getExerciseRecord.calorie,
        };
    }



  }
