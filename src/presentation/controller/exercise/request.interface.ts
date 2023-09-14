import { IsNotEmpty, IsNumber } from 'class-validator';

export class ExerciseGetRequest {
    @IsNotEmpty({ message: 'ユーザーIDを入力してください' })
    userId!: string;
}

export class ExercisePostRequest {
    @IsNumber({},{ message: '運動時間を入力してください（分）' })
    time!: number;

    @IsNumber({},{ message: 'エクササイズIDを入力してください' })
    exerciseId!: number;

    @IsNumber({},{ message: 'カロリーを入力してください' })
    calorie!: number;
}
