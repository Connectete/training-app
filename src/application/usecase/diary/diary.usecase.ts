import { Inject, Injectable } from '@nestjs/common';
<<<<<<< HEAD
import {
  DIARY_REPOSITORY,
  DiaryRepository,
} from '@/infrastructure/interfaces/diary.type';
import { Diary } from '@/domain/diary.type';
=======
import { DIARY_REPOSITORY,DiaryRepository} from '@/infrastructure/interfaces/diary.type';
import { diary } from '@/domain/diary.type';
>>>>>>> 0ce6b41 (日記登録APIの修正)

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
  async updateByUserId(updateDiary: Diary): Promise<boolean> {
    return this.diaryRepository.updateByUserId(updateDiary);
  }
<<<<<<< HEAD

  async createByUserId(createDiary: Diary): Promise<boolean> {
    return this.diaryRepository.createByUserId(createDiary);
=======
  async createDiaryByUserId(createDiary: diary): Promise<boolean> {
    return this.diaryRepository.createDiaryByUserId(createDiary);
>>>>>>> 0ce6b41 (日記登録APIの修正)
  }
}
