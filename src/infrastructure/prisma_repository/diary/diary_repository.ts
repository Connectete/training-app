import { PrismaService } from "../prisma.service";
import { Injectable} from "@nestjs/common";
import { createDiary } from "@/domain/diary.type";
import { DiaryRepository } from "@/infrastructure/interfaces/diary.type";

@Injectable()
export class CreateDiaryRepositoryImpl implements DiaryRepository {
    constructor(private readonly prisma: PrismaService) {}
    async createDiaryByUserId(createDiary: createDiary) {
        return this.prisma.diary.create({
            data:{
                userId : createDiary.userId,
                contents : createDiary.contents,
                dateTime : createDiary.dateTime,
            },
        });
    };
};