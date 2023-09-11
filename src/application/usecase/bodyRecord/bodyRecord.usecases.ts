import { Inject, Injectable, Param } from '@nestjs/common';
import {
  BODYRECORD_REPOSITORY,
  BodyRecordRepository,
} from '@/infrastructure/interfaces/bodyRecord.type';
import { CreateBodyRecod, bodyRecord, updateBodyRecord } from '@/domain/bodyRecord.type';

@Injectable()
export class BodyRecordUseCase {
  constructor(
    @Inject(BODYRECORD_REPOSITORY)
    private readonly bodyRecordRepository: BodyRecordRepository,
  ) {}

  /**
   * 記録体重をユーザIDから取得する
   * @param userId
   */
  async findByUserId(userId: bodyRecord['userId']): Promise<bodyRecord | null> {
    return this.bodyRecordRepository.findByUserId(userId);
  }
  async updateByUserId(updateBodyRecord: updateBodyRecord): Promise<boolean> {
    return this.bodyRecordRepository.updateByUserId(updateBodyRecord);
  }
  async createByUserId(body: CreateBodyRecod ): Promise<boolean> {
    return this.bodyRecordRepository.registerUser(body);
  }
}
 