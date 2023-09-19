export type ExerciseGetResponse = {
  userId: string;
  date: Date;
  timeCount: number;
  exerciseId: number;
  calorie: number;
};

export type ExerciseGetAllResponse = {
  date: Date;
  timeCount: number;
  exerciseId: number;
  calorie: number;
};
