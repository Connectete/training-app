import { CreateDiet } from "@/domain/diet.type";

export const DIET_REPOSITORY = Symbol.for('DIET_REPOSITORY');
export interface DietRepository{
/**
 * 食事をユーザIDから取得する
 * @param userId
 */
 createDiet(createDiet: CreateDiet): Promise<boolean>;
}

