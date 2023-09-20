import { IsNotEmpty } from "class-validator";


export class getDietRequest {
    @IsNotEmpty({ message: "ユーザーIDを入力してください" })
    userId!: string;
    @IsNotEmpty({ message: "日付を入力してください" })
    date!: Date;
    @IsNotEmpty({ message: "タイプを入力してください" })
    type!: string;
}