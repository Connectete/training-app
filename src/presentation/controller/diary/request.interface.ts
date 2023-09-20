import {
  IsNotEmpty,
  IsString,
  MaxLength,
  Matches,
  IsDate,
} from 'class-validator';

export class PutRequest {
  @IsNotEmpty({ message: '内容を入力してください' })
  @IsString({ message: '内容は文字列で入力してください' })
  @MaxLength(500, { message: '内容は500文字以内で入力してください' })
  @Matches(
    /^[a-zA-Z0-9\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]+$/,
    {
      message:
        '内容には特殊文字を除く半角英数字、一部の記号、および日本語が使用できます',
    },
  )
  contents: string;
}

export class DiaryGetRequest {
  @IsNotEmpty({ message: 'ユーザーIDを入力してください' })
  userId: string;
  @IsNotEmpty({ message: '日付を入力してください' })
  date: string;
}

export class PostRequest {
  @IsNotEmpty({ message: '日付を入力してください' })
  @IsDate({ message: '日付を入力してください' })
  date: string;
  @IsNotEmpty({ message: '内容を入力してください' })
  @IsString({ message: '内容は文字列で入力してください' })
  @MaxLength(500, { message: '内容は500文字以内で入力してください' })
  contents: string;
}
