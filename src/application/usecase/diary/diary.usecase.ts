import { Inject, Injectable } from '@nestjs/common';
import {
  DIARY_REPOSITORY,
  DiaryRepository,
} from '@/infrastructure/interfaces/diary.type';
import { diary } from '@/domain/diary.type';

@Injectable()
export class DiaryUseCase {
  constructor(
    @Inject(DIARY_REPOSITORY)
    private readonly diaryRepository: DiaryRepository,
  ) {}

  /**
   * 記録体重をユーザIDから取得する
   * @param userId
   */
  async updateByUserId(updateDiary: diary): Promise<boolean> {
    return this.diaryRepository.updateByUserId(updateDiary);
  }
  async findByUserId(userId: diary['userId']): Promise<diary | null> {
    return this.diaryRepository.findByUserId(userId);
  }
}
