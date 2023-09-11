export type bodyRecord = {
  id: number;
  userId: string;
  date: Date;
  value: number;
};

export type updateBodyRecord = {
  userId: string;
  date: Date;
  value: number;
};


export type CreateBodyRecod = {
    userId: string;
    value: number;
    dateTime: string | Date;
};