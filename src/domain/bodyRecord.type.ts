export type bodyRecord = {
    id: number;
    userId: string;
    dateTime: Date;
    value: number;
};

export type updateBodyRecord = {
    userId: string;
    date: Date;
    value: number;
};