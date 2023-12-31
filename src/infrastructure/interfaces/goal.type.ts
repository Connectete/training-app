import { Goal, UpdateGoal, CreateGoal } from '@/domain/goal.type';

export const GOAL_REPOSITORY = Symbol.for('GOAL_REPOSITORY');

export interface GoalRepository {
  /**
   * 目標体重をユーザIDから取得する
   * @param userId
   */
  findByUserId(userId: string): Promise<Goal | null>;
  updateGoal(updateGoal: UpdateGoal): Promise<boolean>;
  createGoal(createGoal: CreateGoal): Promise<boolean>;
}
