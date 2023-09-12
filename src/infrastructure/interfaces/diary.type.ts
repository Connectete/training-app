<<<<<<< HEAD
import { Diary } from "@/domain/diary.type";
=======
import { createDiary } from "@/domain/diary.type";
>>>>>>> 0684630 (PostRequest以外をコミット)

export const DIARY_REPOSITORY = Symbol.for("DIARY_REPOSITORY");

export interface DiaryRepository{
  /**
  * 日記の内容をユーザIDから取得する
  * @param userId
  */
<<<<<<< HEAD
  createByUserId(createDiary: Diary);
  updateByUserId(updateDiary: Diary);
}
=======
  createDiaryByUserId( createDiary: createDiary);
}
>>>>>>> 0684630 (PostRequest以外をコミット)
