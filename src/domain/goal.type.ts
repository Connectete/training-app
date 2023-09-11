export type Goal = {
  id: number;
  userId: string;
  value: number;
};

export type  UpdateGoal = {
userId: string;
value: number;
datetime: string | Date;
};