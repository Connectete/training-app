export type ExerciseRecord = {
  userId: string;
  date: Date;
  timeCount: number;
  exerciseId: number;
  calorie: number;
};

export type Exercise = {
  id: number;
  name: string;
};

export type ExerciseRecordAdd = {
  userId: string;
  date: Date;
  timeCount: number;
};

export type ExerciseRecordGet = {
  userId: string;
  date: Date;
  timeCount: number;
  exercise: Exercise;
  calorie: number;
};