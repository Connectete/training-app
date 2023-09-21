import { Diary, UpdateDiary, CreateDiary } from '@/domain/diary.type';

export const DIARY_REPOSITORY = Symbol.for('DIARY_REPOSITORY');

export interface DiaryRepository {
  /**
   * 日記ををユーザIDから更新する
   * @param userId
   */
  updateByUserId(updateDiary: UpdateDiary);
  findByUserId(getDiary: Diary);
  createDiary(createDiary: CreateDiary);
}
