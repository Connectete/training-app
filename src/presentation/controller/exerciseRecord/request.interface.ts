import { IsNotEmpty, IsNumber } from 'class-validator';

export class ExerciseGetRequest {
  @IsNotEmpty({ message: 'ユーザーIDを入力してください' })
  userId!: string;
}

export class ExerciseRecordCreateRequest {
  @IsNumber({}, { message: '運動記録を入力してください' })
  timeCount!: number;

  @IsNumber({}, { message: 'エクササイズIDを入力してください' })
  exerciseId!: number;

  @IsNumber({}, { message: 'カロリーを入力してください' })
  calorie!: number;
}

export class ExerciseRecordUpdateRequest {
  @IsNumber({}, { message: '運動記録を入力してください' })
  timeCount!: number;

  @IsNumber({}, { message: 'カロリーを入力してください' })
  calorie!: number;
}
