import { Inject, Injectable } from '@nestjs/common';
import {
  EXERCISE_REPOSITORY,
  ExerciseRepository,
} from '@/infrastructure/interfaces/exercise.type';
import { exercise } from '@/domain/exercise.type';

@Injectable()
export class ExerciseUseCase {
  constructor(
    @Inject(EXERCISE_REPOSITORY)
    private readonly exerciseRepository: ExerciseRepository,
  ) {}

  /**
   * 運動記録をユーザIDと日付から取得する
   * @param userId
   */
  async findByUserId(
    userId: exercise['userId'],
    date: exercise['date'],
  ): Promise<exercise | null> {
    return this.exerciseRepository.findByUserId(userId, date);
  }
}
