export type bodyRecord = {
  id: number;
  userId: string;
  deteTime: Date;
  value: number;
};

export type createBodyRecord = {
  userId: string;
  value: number;
  date: Date;
};


export type updateBodyRecord = {
  userId: string;
  date: Date;
  value: number;
};
