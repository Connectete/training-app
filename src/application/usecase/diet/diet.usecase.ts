import { DietRepository, DIET_REPOSITORY } from "@/infrastructure/interfaces/diet.type";
import { Body, Inject, Injectable } from "@nestjs/common";
import { CreateDiet } from "@/domain/diet.type";

@Injectable()
export class DietUseCase {
    constructor(
        @Inject(DIET_REPOSITORY)
        private readonly dietRepository: DietRepository,    
    ){}

/**
 * 食事をユーザIDから取得する
 * @param userId
 */
async createDiet(createDiet:CreateDiet) : Promise<boolean> {
    return this.dietRepository.createDiet(createDiet);
}

}
