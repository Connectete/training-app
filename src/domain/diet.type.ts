export type Diet = {
    userId: string;
    date: Date;
    photo: string;
    type: DietType;
}

export enum DietType {
    MORNING = 'MORNING',
    LUNCH = 'LUNCH',
    DINNER = 'DINNER',
    SNACK = 'SNACK'
}