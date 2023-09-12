<<<<<<< HEAD
import { diary } from '@/domain/diary.type';

export const DIARY_REPOSITORY = Symbol.for('DIARY_REPOSITORY');

export interface DiaryRepository {
  /**
   * 日記ををユーザIDから更新する
   * @param userId
   */
  updateByUserId(updateDiary: diary);
}
=======
import { createDiary } from "@/domain/diary.type";

export const DIARY_REPOSITORY = Symbol.for("DIARY_REPOSITORY");

export interface DiaryRepository{
  /**
  * 日記の内容をユーザIDから取得する
  * @param userId
  */
  createDiaryByUserId( createDiary: createDiary);
}
>>>>>>> 0684630 (PostRequest以外をコミット)
