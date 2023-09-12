export type bodyRecord = {
    id: number;
    userId: string;
    dateTime: Date;
    value: number;
};

export type     updateBodyRecord = {
    userId: string;
    dateTime: Date;
    value: number;
};