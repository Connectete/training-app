import { BodyRecordRepository } from "@/infrastructure/interfaces/bodyRecord.type";
import { PrismaService } from "../prisma.service";
import { Injectable} from "@nestjs/common";
import { CreateBodyRecod } from "@/domain/bodyRecord.type";

@Injectable()
export class BodyRecordRepositoryImpl implements BodyRecordRepository {
    constructor(private readonly prisma: PrismaService) {}
    async findByUserId(userId: string) {
        return this.prisma.bodyRecord.findMany({
            select: { id: false, userId: false, dateTime: true, value: true},
            where: { userId },
            
        });
    }
    async registerUser( createBodyRecod: CreateBodyRecod ) {
        return this.prisma.bodyRecord.create({
            data: {
                userId: createBodyRecod.userId,
                value: createBodyRecod.value,
                dateTime:  createBodyRecod.dateTime,
            },
            select: { userId: false, value: true, dateTime: true}
        });
    }


}



