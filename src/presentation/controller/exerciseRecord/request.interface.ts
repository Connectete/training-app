import { IsNotEmpty, IsNumber } from 'class-validator';

export class ExerciseGetRequest {
  @IsNotEmpty({ message: 'ユーザーIDを入力してください' })
  userId!: string;
}

export class ExerciseRecordCreateRequest {
  @IsNumber({}, { message: '運動記録を入力してください' })
  timeCount!: number;

  @IsNumber({}, { message: 'データの登録に失敗しました。もう一度実行してください。それでもできない場合はサーバー管理者に問い合わせてください' })
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
