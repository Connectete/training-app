import { Get, Param, Controller } from '@nestjs/common';

import { ExerciseGetResponse,Exercise } from './response.interface';
import { ExerciseRecordUseCase } from '@/application/usecase/exerciseRecord/exerciseRecord.usecase';
import { ExerciseRecord } from '@/domain/exerciseRecord.type';


@Controller('')
export class ExerciseRecordController {
    constructor(private readonly exerciseRecordUseCase: ExerciseRecordUseCase) {}

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
            const dailyRecords: ExerciseGetResponse[] = records.map((record: ExerciseRecord) => ({
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
