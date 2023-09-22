export type ExerciseRecord = {
  userId: string;
  date: Date;
  timeCount: number;
  exercise: Exercise;
  calorie: number;
};

export type Exercise = {
  id: number;
  name: string;
}