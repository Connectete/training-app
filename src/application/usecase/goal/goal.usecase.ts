import { Inject, Injectable } from '@nestjs/common';
import {
  GOAL_REPOSITORY,
  GoalRepository,
} from '@/infrastructure/interfaces/goal.type';
import { Goal } from '@/domain/goal.type';
@Injectable()
export class GoalUseCase {
  constructor(
    @Inject(GOAL_REPOSITORY)
    private readonly goalRepository: GoalRepository,
  ) {}
  /**
   * 目標体重をユーザIDから取得する
   * @param userId
   */
  async findByUserId(userId: Goal['userId']): Promise<Goal | null> {
    return this.goalRepository.findByUserId(userId);
  }
}