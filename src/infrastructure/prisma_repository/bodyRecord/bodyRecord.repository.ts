import { BodyRecordRepository } from "@/infrastructure/interfaces/bodyRecord.type";
import { PrismaService } from "../prisma.service";
import { Injectable} from "@nestjs/common";

@Injectable()
export class BodyRecordRepositoryImpl implements BodyRecordRepository {
    constructor(private readonly prisma: PrismaService) {}
    async findByUserId(userId: string) {
        return this.prisma.bodyRecord.findMany({
            select: { id: false, userId: false, dateTime: true, value: true},
            where: { userId },
            
        });
    }
 }
