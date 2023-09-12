import { IsNotEmpty,IsString, MaxLength,Matches} from 'class-validator';

export class PostRequest {
  @IsNotEmpty({message: '日記の内容を入力して下さい'})
  @IsString({message: '文字列を入力してください'})
  @MaxLength(300,{message: '日記の内容は300文字までです'})
  @Matches(/^[a-zA-Z0-9\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]+$/,
   {message: '内容には特殊文字を除く半角英数字、一部の記号、および日本語が使用できます',})
  contents : string;
}
