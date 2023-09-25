import { IsNotEmpty, IsNumber } from 'class-validator';
import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class GetRequest {
  @IsNotEmpty({ message: 'ユーザIDを入力してください' })
  userId!: string;
}

export class PostRequest {
  @IsNumber({}, { message: '体重を入力してください' })
  value!: number;
}
