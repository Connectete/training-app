import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ExerciseRepository } from '@/infrastructure/interfaces/exercise.type';
import { exercise } from '@/domain/exercise.type';

@Injectable()
export class ExerciseRepositoryImpl implements ExerciseRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findByUserId(userId: string, date: Date) {
    return this.prisma.exerciseRecord.findMany({
      select: { userId: true, date: true, timeCount: true, exercise: true ,calorie: true},
      where: {
        AND: [{ userId }, { date }],
      },
    });
  }
}
