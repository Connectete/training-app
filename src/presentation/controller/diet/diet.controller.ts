import { Controller, Get, Param } from "@nestjs/common";
import { DietUseCase } from "@/application/usecase/diet/diet.usecase";
import { Diet, DietType } from "@/domain/diet.type";
import { getDietRequest } from "./request.interface";
import { getDietResponse } from "./response.interface";

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

    @Get("users/:userId/dates/:date/diets/:type/diet")
    async get(
        @Param() { userId, date, type }: getDietRequest,
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
}