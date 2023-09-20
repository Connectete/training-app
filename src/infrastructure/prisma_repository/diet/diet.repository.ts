import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DietRepository } from '@/infrastructure/interfaces/diet.type';
import { Diet } from '@/domain/diet.type';

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
}
