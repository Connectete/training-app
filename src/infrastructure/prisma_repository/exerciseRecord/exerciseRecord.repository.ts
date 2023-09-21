import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ExerciseRecordRepository } from '@/infrastructure/interfaces/exerciseRecord.type';
import { ExerciseRecord } from '@/domain/exerciseRecord.type';
import { Prisma } from '@prisma/client';

@Injectable()
export class ExerciseRecordRepositoryImpl implements ExerciseRecordRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findByUserId(exerciseRecord: ExerciseRecord) {
    try {
      return await this.prisma.exerciseRecord.findUnique({
        select: {
          userId: true,
          date: true,
          timeCount: true,
          exercise: { select: { name: false, id: true } },
          calorie: true
        },
        where: { userId: exerciseRecord.userId },
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