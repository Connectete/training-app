import { DietRepository } from "@/infrastructure/interfaces/diet.type";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { CreateDiet } from "@/domain/diet.type";

@Injectable()
export class DietRepositoryImpl implements DietRepository {
    constructor(private readonly prisma: PrismaService){}
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
        if (result == null) {
            return false;
          } else {
            return true;
          }
    };
}
