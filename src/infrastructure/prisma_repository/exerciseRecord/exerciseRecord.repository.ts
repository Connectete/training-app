import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ExerciseRecordRepository } from '@/infrastructure/interfaces/exerciseRecord.type';
import { exerciseRecord } from '@/domain/exerciseRecord.type';

@Injectable()
export class ExerciseRecordRepositoryImpl implements ExerciseRecordRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findByUserId(userId: string, date: Date) {
    return this.prisma.exerciseRecord.findMany({
      select: { userId: true, date: true, timeCount: true, exercise: true ,calorie: true},
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
        timeCount: exerciseRecord.time,
        exerciseId: exerciseRecord.exerciseId,
        calorie: exerciseRecord.calorie,
      },
    });
  }
  async findAllByUserId(userId: string) {
    return this.prisma.exerciseRecord.findMany({
      select: { userId: false, date: true, timeCount: true, exercise: true ,calorie: true},
      where: {
        userId,
      },
    });
  }
}
