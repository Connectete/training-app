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

export type createBodyRecord = {
  userId: string;
  date: Date;
  value: number;
};

export type CreateBodyRecord = {

    userId: string;
    value: number;
    date: Date;
};
