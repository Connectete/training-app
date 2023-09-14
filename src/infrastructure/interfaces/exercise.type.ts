import { exerciseRecord } from '@/domain/exercise.type';

export const EXERCISE_REPOSITORY = Symbol.for('EXERCISE_REPOSITORY');

export interface ExerciseRepository {
  /**
   * 運動記録をユーザIDから取得する
   * @param userId
   */
  findByUserId(userId: string, date: Date);
  createExerciseRecord(exercise: exerciseRecord);
  findAllByUserId(userId: string);
}
