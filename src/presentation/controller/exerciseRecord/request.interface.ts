import { IsNotEmpty } from 'class-validator';

export class ExerciseGetRequest {
    @IsNotEmpty({ message: 'ユーザーIDを入力してください' })
    userId!: string;
}
