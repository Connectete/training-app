import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GetRequest } from './request.interface';
import { GetResponse } from './response.interface';
import { GoalUseCase } from '@/application/usecase/goal/goal.usecase';

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
}
