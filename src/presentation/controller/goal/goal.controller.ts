import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Put,
  Body,
} from '@nestjs/common';
import { GetRequest } from './request.interface';
import { GetResponse } from './response.interface';
import { GoalUseCase } from '@/application/usecase/goal/goal.usecase';
import { PutRequest } from '../goal/request.interface';
import { UpdateGoal } from '@/domain/goal.type';
import { kStringMaxLength } from 'buffer';
@Controller('')
export class GoalController {
  constructor(private readonly goalUseCase: GoalUseCase) {}
  @Get('users/:userId/goal')
  async get(@Param() { userId }: GetRequest): Promise<GetResponse> {
    const goal = await this.goalUseCase.findByUserId(userId);
    if (goal === null)
      throw new NotFoundException(['目標体重が見つかりませんでした']);
    return goal;
  }
  @Put('users/:userId/goal/update')
  async put(
    @Param('userId') userId: string,
    @Body() PutDate: PutRequest,
  ): Promise<boolean> {
    const data = {
      userId: userId,
      goal: PutDate.value,
    };
    const result = await this.goalUseCase.updateGoal(data);
    return result;
  }
}
