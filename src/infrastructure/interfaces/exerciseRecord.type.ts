import { ExerciseRecord } from '@/domain/exerciseRecord.type';

export const EXERCISERECORD_REPOSITORY = Symbol.for('EXERCISERECORD_REPOSITORY');

export interface ExerciseRecordRepository {
  /**
   * 運動記録をユーザIDから取得する
   * @param userId
   */
  findByUserId(userId: string): Promise<ExerciseRecord | null>;
}
