export type Goal = {
  id: number;
  userId: string;
  value: number;
};

export type  UpdateGoal = {
userId: any;
value: number;
datetime: string | Date;
};