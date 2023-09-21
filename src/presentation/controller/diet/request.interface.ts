import { IsNotEmpty } from "class-validator";


export class getDietRequest {
    @IsNotEmpty({ message: "データを取得出来ませんでした。再読み込みを行うか、管理者に連絡して下さい。" })
    userId!: string;
    @IsNotEmpty({ message: "データを取得出来ませんでした。再読み込みを行うか、管理者に連絡して下さい。" })
    date!: Date;
    @IsNotEmpty({ message: "データを取得出来ませんでした。再読み込みを行うか、管理者に連絡して下さい。" })
    type!: string;
}