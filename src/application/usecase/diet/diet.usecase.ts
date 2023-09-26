import { Injectable, Inject } from '@nestjs/common';
import { DIET_REPOSITORY, DietRepository } from '@/infrastructure/interfaces/diet.type';
import { Diet,UpdateDiet } from '@/domain/diet.type';

@Injectable()
export class DietUseCase {
    constructor(
        @Inject(DIET_REPOSITORY)
        private readonly dietRepository: DietRepository,
    ) {}
    /**
     * @param diet
     * 食事記録をuserId,date,typeから取得する
     */
    async findByUserId(diet: Diet): Promise<Diet | null> {
        return this.dietRepository.findByUserId(diet);
    }
    /**
     * @param diet
     * 食事記録をuserId,date,typeから更新する
     * date,photo,typeを更新する
     */
    async updateByUserId(diet: UpdateDiet): Promise<boolean> {
        return this.dietRepository.updateByUserId(diet);
    }
}
