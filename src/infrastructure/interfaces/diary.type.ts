import { createDiary, diary } from "@/domain/diary.type";

export const DIARY_REPOSITORY = Symbol.for("DIARY_REPOSITORY");

export interface DiaryRepository{
  /**
  * 日記の内容をユーザIDから取得する
  * @param userId
  */
  createDiaryByUserId( createDiary: createDiary);
  updateByUserId(updateDiary: diary);
}

