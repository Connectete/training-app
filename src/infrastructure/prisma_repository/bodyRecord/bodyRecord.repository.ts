import { BodyRecordRepository } from '@/infrastructure/interfaces/bodyRecord.type';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { updateBodyRecord, CreateBodyRecod} from '@/domain/bodyRecord.type';


@Injectable()
export class BodyRecordRepositoryImpl implements BodyRecordRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findByUserId(userId: string) {
    return this.prisma.bodyRecord.findMany({
      select: { userId: false, date: true, value: true },
      where: { userId },
    });
  }
  async updateByUserId(updateBodyRecord: updateBodyRecord) {
    return this.prisma.bodyRecord.update({
      where: {
        userId_date: {
          userId: updateBodyRecord.userId,
          date: updateBodyRecord.date,
        },
      },
      data: {
        value: updateBodyRecord.value,
      },
    });
  }
  async registerUser( createBodyRecod: CreateBodyRecod ) {
    return this.prisma.bodyRecord.create({
        data: {
            userId: createBodyRecod.userId,
            value: createBodyRecod.value,
            date:  createBodyRecod.dateTime,
        },
        select: { userId: false, value: true, date: true}
    });
}
}
