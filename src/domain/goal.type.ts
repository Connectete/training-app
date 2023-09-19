export type Goal = {
  id: number;
  userId: string;
  value: number;
};

export type UpdateGoal = {
  userId: string;
  goal: number;
};

export type CreateGoal = {
  userId: string;
  goal: number;
};
