import { Controller, Get, Param, Put, Body, Post } from "@nestjs/common";
import { DietUseCase } from "@/application/usecase/diet/diet.usecase";
import { DietType, CreateDiet} from "@/domain/diet.type";
import { GetDietRequest} from "./request.interface";
import { PostRequest } from "../diet/request.interface";


@Controller("")
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
    @Post('users/:userId/diets')
    async post(
        @Param('userId') userId: string,
        @Param('date') date: string,
        @Body('type') type: DietType,
        ): Promise<boolean> {
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
    

    @Get("users/:userId/dates/:date/diets/:type/diet")
    async get(
        @Param() { userId, date, type }: GetDietRequest,
    ) {
        const DietType = this.mapToDietType(type);
        const getDiet = await this.dietUseCase.findByUserId({
            userId: userId,
            date: date,
            photo: "",
            type: DietType,
        });
        return getDiet;
    }
    @Put("users/:userId/dates/:date/diets/:type/diet/update")
    async put(
        @Param('userId') userId: string,
        @Param('date') date: string,
        @Param('type') type: string,
        @Body('photo') photo: string,
    ) {
        const dietType = this.mapToDietType(type);
        const updateDiet = await this.dietUseCase.updateByUserId({
            userId: userId,
            date: new Date(date),
            photo: photo,
            type: dietType,
        });

        const propertiesToRemove = ['createdAt', 'updatedAt'];
        propertiesToRemove.forEach(prop => {
        if (updateDiet.hasOwnProperty(prop)) {
            delete updateDiet[prop];
        }
    });
        return updateDiet;
    }
}
