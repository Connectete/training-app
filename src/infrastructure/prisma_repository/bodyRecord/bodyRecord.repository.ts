import { BodyRecordRepository } from '@/infrastructure/interfaces/bodyRecord.type';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateBodyRecord } from '@/domain/bodyRecord.type';

@Injectable()
export class BodyRecordRepositoryImpl implements BodyRecordRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findByUserId(userId: string) {
    return this.prisma.bodyRecord.findMany({
      select: { userId: false, date: true, value: true },
      where: { userId },
    });
  }
  async registerUser(createBodyRecord: CreateBodyRecord) {
    return this.prisma.bodyRecord.create({
      data: {
        userId: createBodyRecord.userId,
        value: createBodyRecord.value,
        date: createBodyRecord.date,
      },
      select: { userId: false, value: true, date: true },
    });
  }
}
