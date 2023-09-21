import { Get, Param, Put, Body, Controller } from '@nestjs/common';
import { ExerciseGetRequest, } from './request.interface';
import { ExerciseGetResponse } from './response.interface';
import { ExerciseRecordUseCase } from '@/application/usecase/exerciseRecord/exerciseRecord.usecase';

@Controller('')
export class ExerciseRecordController {
    constructor(private readonly exerciseRecordUseCase: ExerciseRecordUseCase) {}

    @Get('users/:userId/exerciseRecord')
    async get(
        @Param('userId') userId: string,
    ): Promise<ExerciseGetResponse> {


  }
