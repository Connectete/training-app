<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 0ce6b4190df28e94ca14993e0fab0fdcfa00cf6a
import { diary } from '@/domain/diary.type';

export const DIARY_REPOSITORY = Symbol.for('DIARY_REPOSITORY');

export interface DiaryRepository {
  /**
   * 日記ををユーザIDから更新する
   * @param userId
   */
  updateByUserId(updateDiary: diary);
  createDiaryByUserId( createDiary: diary);
}
<<<<<<< HEAD
>>>>>>> 0ce6b41 (日記登録APIの修正)
=======
>>>>>>> 0ce6b4190df28e94ca14993e0fab0fdcfa00cf6a
