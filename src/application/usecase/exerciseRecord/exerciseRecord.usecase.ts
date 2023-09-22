import { Inject, Injectable } from '@nestjs/common';
import {
  EXERCISERECORD_REPOSITORY,
  ExerciseRecordRepository,
} from '@/infrastructure/interfaces/exerciseRecord.type';
import { ExerciseRecord, ExerciseRecordAdd } from '@/domain/exerciseRecord.type';


@Injectable()
export class ExerciseRecordUseCase {
  constructor(
    @Inject(EXERCISERECORD_REPOSITORY)
    private readonly exerciseRecordRepository: ExerciseRecordRepository,
  ) {}

  /**
   * 運動記録をユーザIDと日付から取得する
   * @param userId
   * @returns //日付ごとの運動記録
   */

  async createExerciseRecord(exerciseRecord: ExerciseRecord): Promise<boolean> {
    return this.exerciseRecordRepository.createExerciseRecord(exerciseRecord);
  }
  async findAllByUserId(
    userId: ExerciseRecord['userId'],
  ): Promise<ExerciseRecord | null> {
    return this.exerciseRecordRepository.findAllByUserId(userId);
  }
  async updateExerciseRecord(exerciseRecord: ExerciseRecord): Promise<boolean> {
    return this.exerciseRecordRepository.updateExerciseRecord(exerciseRecord);
  }
  async findByUserId(
    userId : ExerciseRecord['userId'],
  ): Promise<{ [date: string]: ExerciseRecordAdd[] }> {
    const exerciseRecords = await this.exerciseRecordRepository.findByUserId(
      userId,);
    const exerciseRecordsByDate: { [date: string]: ExerciseRecordAdd[] } = {};

    if (exerciseRecords) {
      for (const record of exerciseRecords) {
        const { date } = record;

        // 日付を文字列に変換
        const dateString = date.toISOString().split('T')[0];

        if (!exerciseRecordsByDate[dateString]) {
          exerciseRecordsByDate[dateString] = [];
        }

        // 日付ごとの配列に運動記録を追加
        exerciseRecordsByDate[dateString].push(record);
      }
    }

    return exerciseRecordsByDate;
  }
}
