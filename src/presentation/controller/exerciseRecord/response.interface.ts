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
export type ExerciseGetAllResponse2 = {
  userId: string;
  timeCount: number;
  calorie: number;
  exercise: Exercise;
}

export type Exercise = {
  id: number;
  name: string;
}
