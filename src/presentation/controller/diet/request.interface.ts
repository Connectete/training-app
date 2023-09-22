import { IsNotEmpty } from "class-validator";

export class PostRequest {
    @IsNotEmpty({ message: '写真を添付してください'})
    photo: string;
}