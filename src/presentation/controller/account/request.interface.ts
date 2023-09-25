import { IsString, IsNotEmpty } from "class-validator";

export class AccountCreateRequest {
    @IsNotEmpty({ message: 'ユーザIDを入力してください' })
    @IsString({ message: 'ユーザIDは文字列で入力してください' })
    userId: string;

    @IsString({ message: 'パスワードは文字列で入力してください' })
    @IsNotEmpty({ message: 'パスワードを入力してください' })
    password: string;
}