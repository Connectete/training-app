import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetRequest {
  @IsNotEmpty({ message: 'データを取得出来ませんでした。再読み込みを行うか、管理者に連絡して下さい。' })
  userId!: string;
}

export class PutRequest {
  @IsNumber({}, { message: '体重を入力してください' })
  value!: number;
}

export class PostRequest {
  @IsNumber({}, { message: '体重を入力してください' })
  value!: number;
}
