import { Inject, Injectable } from '@nestjs/common';
import { createDiary } from '@/domain/diary.type'; 
import { DIARY_REPOSITORY,DiaryRepository } from '@/infrastructure/interfaces/diary.type';

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
  async createDiaryByUserId(createDiary: createDiary): Promise<boolean> {
    return this.diaryRepository.createDiaryByUserId(createDiary);
  }
}