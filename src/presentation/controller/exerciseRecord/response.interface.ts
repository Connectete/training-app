export type ExerciseGetResponse = {
  userId: string;
  date: Date;
  time: number;
  exerciseId :number;
  calorie: number;
};

export type ExerciseGetAllResponse = {
  date: Date;
  time: number;
  exerciseId :number;
  calorie: number;
};