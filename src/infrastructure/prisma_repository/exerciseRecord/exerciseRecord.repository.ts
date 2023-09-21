import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ExerciseRecordRepository } from '@/infrastructure/interfaces/exerciseRecord.type';
import { ExerciseRecord } from '@/domain/exerciseRecord.type';
import { Prisma } from '@prisma/client';

@Injectable()
export class ExerciseRecordRepositoryImpl implements ExerciseRecordRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findByUserId(userId: string): Promise<ExerciseRecord[] | null> {
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