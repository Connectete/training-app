export type UpdateDiary = {
  userId?: string;
  date: Date;
  contents: string;
};

export type Diary = {
  userId: string;
  date: Date;
}