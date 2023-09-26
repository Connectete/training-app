import { Controller, Get, Param, Put, Body } from "@nestjs/common";
import { DietUseCase } from "@/application/usecase/diet/diet.usecase";
import { DietType,} from "@/domain/diet.type";
import { GetDietRequest} from "./request.interface";


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
    };

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