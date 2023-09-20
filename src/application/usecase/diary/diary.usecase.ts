import { Inject, Injectable } from '@nestjs/common';
import {
  DIARY_REPOSITORY,
  DiaryRepository,
} from '@/infrastructure/interfaces/diary.type';
import { Diary, UpdateDiary } from '@/domain/diary.type';

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
  async updateByUserId(updateDiary: UpdateDiary): Promise<boolean> {
    return this.diaryRepository.updateByUserId(updateDiary);
  }
  async findByUserId(getDiary: Diary): Promise<Diary | null> {
    return this.diaryRepository.findByUserId(getDiary);
  }
}
