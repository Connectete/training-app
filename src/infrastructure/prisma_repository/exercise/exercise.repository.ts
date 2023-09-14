import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ExerciseRepository } from '@/infrastructure/interfaces/exercise.type';
import { exerciseRecord } from '@/domain/exercise.type';

@Injectable()
export class ExerciseRepositoryImpl implements ExerciseRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findByUserId(userId: string, date: Date) {
    return this.prisma.exerciseRecord.findMany({
      select: { userId: true, date: true, time: true, exercise: true ,calorie: true},
      where: {
        AND: [{ userId }, { date }],
      },
    });
  }
  async createExerciseRecord(exerciseRecord: exerciseRecord) {
    return this.prisma.exerciseRecord.create({
      data: {
        userId: exerciseRecord.userId,
        date: exerciseRecord.date,
        time: exerciseRecord.time,
        exerciseId: exerciseRecord.exerciseId,
        calorie: exerciseRecord.calorie,
      },
    });
  }
  async findAllByUserId(userId: string) {
    return this.prisma.exerciseRecord.findMany({
      select: { userId: false, date: true, time: true, exercise: true ,calorie: true},
      where: {
        userId,
      },
    });
  }
}
