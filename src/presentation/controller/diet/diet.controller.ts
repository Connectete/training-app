import { DietUseCase } from "@/application/usecase/diet/diet.usecase";
import { Controller } from "@nestjs/common";
import { Post, Param, Body,} from "@nestjs/common";
import { PostRequest } from "../diet/request.interface";
import { CreateDiet, DietType } from "@/domain/diet.type";
 



@Controller('')
export class DietController {
    constructor(private readonly dietUseCase: DietUseCase) {}
    private mapToDietType(type: string): DietType {
        switch (type) {
            case "MORNING":
                return DietType.MORNING;
            case "LUNCH":
                return DietType.LUNCH;
            case "DINNER":
                return DietType.DINNER;
            case "SNACK":
                return DietType.SNACK;
            default:
                throw new Error("DietTypeが不正です");
        }
    }
    @Post('users/:userId/dates/:date/diets/:type/diet/create')
    async post(
        @Param('userId') userId: string,
        @Param('date') date: string,
        @Param('type') type: string,
       //@Body('photo') photo: PostRequest['photo']
        ): Promise<boolean> {
            //console.log(photo);
            const DietType = this.mapToDietType(type);
            const data: CreateDiet = {
                userId: userId,
                date: new Date(date),
                photo: "aaa",
                type: DietType,
            };
            const result = await this.dietUseCase.createDiet(data);
            return result;
        }
}