export type ExerciseGetResponse = {
  userId: string;
  timeCount: number;
  calorie: number;
  exercise: Exercise;
}

export type Exercise = {
  id: number;
  name: string;
}