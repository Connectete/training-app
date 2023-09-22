import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DietRepository } from '@/infrastructure/interfaces/diet.type';
import { Diet, UpdateDiet } from '@/domain/diet.type';

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
}