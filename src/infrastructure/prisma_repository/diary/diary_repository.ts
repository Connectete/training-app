import { PrismaService } from "../prisma.service";
import { Injectable} from "@nestjs/common";
import { Diary } from "@/domain/diary.type";
import { DiaryRepository } from "@/infrastructure/interfaces/diary.type";

@Injectable()
export class DiaryRepositoryImpl implements DiaryRepository {
    constructor(private readonly prisma: PrismaService) {}
    async createByUserId(createDiary: Diary) {
        return this.prisma.diary.create({
            data:{
                userId : createDiary.userId,
                contents : createDiary.contents,
                date : createDiary.date,
            },
        });
    };
    async updateByUserId(updateDiary: Diary) {
        return this.prisma.diary.update({
          where: {
            userId_date: {
              userId: updateDiary.userId,
              date: updateDiary.date,
            },
          },
          data: {
            contents: updateDiary.contents,
          },
        });
      }
};