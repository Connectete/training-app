export type bodyRecord = {
    id: number;
    userId: string;
    deteTime: Date;
    value: number;
};

export type CreateBodyRecod = {
    userId: string;
    value: number;
    dateTime: string | Date;
};