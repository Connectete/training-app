import { Inject, Injectable } from '@nestjs/common';
import { DIARY_REPOSITORY,DiaryRepository} from '@/infrastructure/interfaces/diary.type';
import { Diary } from '@/domain/diary.type';


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
  async createDiaryByUserId(createDiary: diary): Promise<boolean> {
    return this.diaryRepository.createDiaryByUserId(createDiary);
  }
}
