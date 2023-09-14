import { Get, Param, Post, Body, Controller } from '@nestjs/common';
import { ExercisePostRequest } from './request.interface';
import { ExerciseGetResponse, ExerciseGetAllResponse} from './response.interface';
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
    @Post('users/:userId/dates/:date/exercise/create')
    async post(
        @Param('userId') userId: string,
        @Param('date') date: string,
        @Body() createExerciseRequest: ExercisePostRequest,
    ): Promise<boolean> {
        const exercise = await this.exerciseUseCase.createExerciseRecord({
            userId: userId,
            date: new Date(date),
            time: createExerciseRequest.time,
            exerciseId: createExerciseRequest.exerciseId,
            calorie: createExerciseRequest.calorie,
        });
        return exercise;
  }
   @Get('users/:userId/exercise/findMany')
    async getAll(
        @Param('userId') userId: string,
    ): Promise<ExerciseGetAllResponse> {
        const exercise = await this.exerciseUseCase.findAllByUserId(userId);
        return exercise;
    }
}
