import { Inject, Injectable } from '@nestjs/common';
import {
  EXERCISERECORD_REPOSITORY,
  ExerciseRecordRepository,
} from '@/infrastructure/interfaces/exerciseRecord.type';
import { ExerciseRecord } from '@/domain/exerciseRecord.type';

@Injectable()
export class ExerciseRecordUseCase {
  constructor(
    @Inject(EXERCISERECORD_REPOSITORY)
    private readonly exerciseRecordRepository: ExerciseRecordRepository,
  ) {}

  /**
   * 運動記録をユーザから取得する
   * @param userId
   */
  async findByUserId(
    usedId : ExerciseRecord['userId'],
  ): Promise<ExerciseRecord | null> {
    return this.exerciseRecordRepository.findByUserId(usedId);
  }
}
