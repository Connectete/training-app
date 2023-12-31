import { CreateGoal, UpdateGoal } from '@/domain/goal.type';
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
      select: { userId: true, value: true },
      where: { userId },
    });
  }
  async updateGoal(updateGoal: UpdateGoal) {
    const result = this.prisma.goal.update({
      where: {
        userId: updateGoal.userId,
      },
      data: {
        value: updateGoal.goal,
      },
    });
    if (result == null) {
      return false;
    } else {
      return true;
    }
  }
  async createGoal(createGoal: CreateGoal) {
    const result = this.prisma.goal.create({
      data: {
        value: createGoal.goal,
        userId: createGoal.userId,
      },
    });
    if (result == null) {
      return false;
    } else {
      return true;
    }
  }
  };

