import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DietRepository } from '@/infrastructure/interfaces/diet.type';
import { Diet, UpdateDiet, CreateDiet } from '@/domain/diet.type';

@Injectable()
export class DietRepositoryImpl implements DietRepository {
    constructor(private readonly prisma: PrismaService) {}
    async findByUserId(diet: Diet) {
        return this.prisma.diet.findUnique({
            select: { userId: true, date: true, photo: true, type: true },
            where: {
                userId_date_type: {
                    userId: diet.userId,date: diet.date,type: diet.type,
                }
            }
        });
    }
    async updateByUserId(updateDiet: UpdateDiet) {
        return this.prisma.diet.update({
            where: {
                userId_date_type: {
                    userId: updateDiet.userId,
                    date: new Date(updateDiet.date),
                    type: updateDiet.type,
                }
            },
            data: {
                photo: updateDiet.photo,
            },
        });
    }


    /**
     * 目標体重をユーザIDから取得する
     * @param userId
     */
    async createDiet(createDiet: CreateDiet) {
        const result = this.prisma.diet.create({
            data: {
                userId: createDiet.userId,
                date: createDiet.date,
                photo: createDiet.photo,
                type: createDiet.type,
            },
        });
        return result !== null
    };
}
