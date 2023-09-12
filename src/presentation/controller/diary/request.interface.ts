import { IsNotEmpty, IsString, MaxLength, Matches } from 'class-validator';

export class PutRequest {
  @IsNotEmpty({ message: '内容を入力してください' })
  @IsString({ message: '内容は文字列で入力してください' })
  @MaxLength(500, { message: '内容は500文字以内で入力してください' })
  @Matches(
    /^[a-zA-Z0-9\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]+$/,
    {message:'内容には特殊文字を除く半角英数字、一部の記号、および日本語が使用できます',},)
  contents: string;
}
export class PostRequest {
  @IsNotEmpty({message: '日記の内容を入力して下さい'})
  @IsString({message: '文字列を入力してください'})
  @MaxLength(300,{message: '日記の内容は300文字までです'})
  @Matches(/^[a-zA-Z0-9\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]+$/,
   {message: '内容には特殊文字を除く半角英数字、一部の記号、および日本語が使用できます',})
  contents : string;
}
