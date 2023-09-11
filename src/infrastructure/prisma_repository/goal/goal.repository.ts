import { UpdateGoal } from '@/domain/goal.type';
import { GoalRepository } from '../../interfaces/goal.type';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoalRepositoryImpl implements GoalRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * 目標体重をユーザIDから検索する
   * @param userId
   */
  async findByUserId(userId: string) {
    return this.prisma.goal.findFirst({
      select: { id: true, userId: true, value: true },
      where: { userId },
    });
  }
  async updateGoal(updateGoal: UpdateGoal) {
    return this.prisma.goal.update
  }









}
