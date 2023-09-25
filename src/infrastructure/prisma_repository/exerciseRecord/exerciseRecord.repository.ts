import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ExerciseRecordRepository } from '@/infrastructure/interfaces/exerciseRecord.type';
import { ExerciseRecord,ExerciseRecordAdd } from '@/domain/exerciseRecord.type';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Prisma } from '@prisma/client';


@Injectable()
export class ExerciseRecordRepositoryImpl implements ExerciseRecordRepository {
  constructor(private readonly prisma: PrismaService) {}
  async createExerciseRecord(exerciseRecord: ExerciseRecord) {
    return this.prisma.exerciseRecord.create({
      data: {
        userId: exerciseRecord.userId,
        date: exerciseRecord.date.toISOString(),
        timeCount: exerciseRecord.timeCount,
        exerciseId: exerciseRecord.exerciseId,
        calorie: exerciseRecord.calorie,
      },
    });
  }
  async findAllByUserId(userId: string) {
    return this.prisma.exerciseRecord.findMany({
      select: {
        userId: false,
        date: true,
        timeCount: true,
        exercise: true,
        calorie: true,
      },
      where: {
        userId,
      },
    });
  }
  async updateExerciseRecord(exerciseRecord: ExerciseRecord) {
    return this.prisma.exerciseRecord.update({
      where: {
        userId_exerciseId_date: {
          userId: exerciseRecord.userId,
          date: exerciseRecord.date.toISOString(),
          exerciseId: exerciseRecord.exerciseId,
        },
      },
      data: {
        timeCount: exerciseRecord.timeCount,
        calorie: exerciseRecord.calorie,
      },
    });
  }
  async findByUserId(userId: string): Promise<ExerciseRecordAdd[] | null> {
    try {
      return await this.prisma.exerciseRecord.findMany({
        select: {
          id:false,
          userId: true,
          date: true,
          timeCount: true,
          exercise: { select: { name: true, id: true } },
          calorie: true
        },
        where: { userId: userId },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('データが存在しません');
        }
      }
      throw new InternalServerErrorException('予期せぬエラーが発生しました');
    }
  }
}
