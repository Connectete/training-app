import { Inject, Injectable } from '@nestjs/common';
import {
  EXERCISERECORD_REPOSITORY,
  ExerciseRecordRepository,
} from '@/infrastructure/interfaces/exerciseRecord.type';
import { exerciseRecord } from '@/domain/exerciseRecord.type';

@Injectable()
export class ExerciseRecordUseCase {
  constructor(
    @Inject(EXERCISERECORD_REPOSITORY)
    private readonly exerciseRecordRepository: ExerciseRecordRepository,
  ) {}

  /**
   * 運動記録をユーザIDと日付から取得する
   * @param userId
   */
  async findByUserId(
    userId: exerciseRecord['userId'],
    date: exerciseRecord['date'],
  ): Promise<exerciseRecord | null> {
    return this.exerciseRecordRepository.findByUserId(userId, date);
  }
  async createExerciseRecord(exerciseRecord: exerciseRecord): Promise<boolean> {
    return this.exerciseRecordRepository.createExerciseRecord(exerciseRecord);
  }
  async findAllByUserId(
    userId: exerciseRecord['userId'],
  ): Promise<exerciseRecord | null> {
    return this.exerciseRecordRepository.findAllByUserId(userId);
  }
  async updateExerciseRecord(exerciseRecord: exerciseRecord): Promise<boolean> {
    return this.exerciseRecordRepository.updateExerciseRecord(exerciseRecord);
  }
}
