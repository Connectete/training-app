import { Get, Param, Put, Body, Controller } from '@nestjs/common';
import { ExerciseGetRequest, } from './request.interface';
import { ExerciseGetResponse } from './response.interface';
import { ExerciseUseCase } from '@/application/usecase/exercise/exercise.usecase';

@Controller('')
export class ExerciseController {
    constructor(private readonly exerciseUseCase: ExerciseUseCase) {}

    @Get('users/:userId/dates/:date/exercise/find')
    async get(
        @Param('userId') userId: string,
        @Param('date') date: string,
    ): Promise<ExerciseGetResponse> {
        const exercise = await this.exerciseUseCase.findByUserId(userId, new Date(date));
        return exercise;
    }
  }
