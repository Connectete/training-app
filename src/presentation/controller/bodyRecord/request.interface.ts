import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetRequest {
  @IsNotEmpty({ message: 'ユーザIDを入力してください' })
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

// export class PostRequest{
//   @IsNotEmpty({ message: 'ユーザIDを入力してください' })
//   userId!: string;
//   @IsNumber({},{ message: '体重を入力してください'})
//   value!: number;
//   @IsDate({
//     message: '日付を入力してください',
//   })
//   @Type(() => Date)
//   dateTime!: Date ;
