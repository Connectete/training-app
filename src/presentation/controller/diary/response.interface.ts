export type DiaryGetResponse = {
  userId: string;
  date: Date;
};

export type DiaryUpdateResponse = {
  userId: string;
  date: Date;
  type: string;
  photo: string;
};
