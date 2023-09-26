import { Diet, UpdateDiet } from "@/domain/diet.type";

export const DIET_REPOSITORY = Symbol.for('DIET_REPOSITORY');

export interface DietRepository {

    /**
     *
     * @param diet
     */

    findByUserId(getDiet: Diet);
    updateByUserId(updateDiet: UpdateDiet);

}