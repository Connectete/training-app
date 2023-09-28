import { IsString, IsNotEmpty } from "class-validator";

export class AccountCreateRequest {
    @IsNotEmpty({ message: 'ユーザIDを入力してください' })
    @IsString({ message: 'ユーザIDは文字列で入力してください' })
    userId: string;

    @IsString({ message: 'パスワードは文字列で入力してください' })
    @IsNotEmpty({ message: 'パスワードを入力してください' })
    password: string;

    @IsString({ message: '名前は文字列で入力してください' })
    @IsNotEmpty({ message: '名前を入力してください' })
    name: string;
}

export class AccountChangePasswordRequest {
    @IsString({ message: '新しいパスワードは文字列で入力してください' })
    @IsNotEmpty({ message: '新しいパスワードを入力してください' })
    password: string;
}

export class AccountLoginRequest {
    @IsString({ message: 'ユーザIDは文字列で入力してください' })
    @IsNotEmpty({ message: 'ユーザIDを入力してください' })
    userId: string;

    @IsString({ message: 'パスワードは文字列で入力してください' })
    @IsNotEmpty({ message: 'パスワードを入力してください' })
    password: string;
}