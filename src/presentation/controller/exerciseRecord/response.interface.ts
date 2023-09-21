export type ExerciseGetResponse = {
  userId: string;
  timeCount: number;
  calorie: number;
  date: Date;
  exercise: Exercise;
}

export type Exercise = {
  id: number;
  name: string;
}