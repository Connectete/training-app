import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";
import { AccountRepository } from "@/infrastructure/interfaces/account.type";
import { AccountInfo, ChangePassword, LoginInfo } from "@/domain/account.type";
import { createHash } from "crypto";

@Injectable()
export class AccountRepositoryImpl implements AccountRepository {
    constructor(private readonly prisma: PrismaService) {}
    async createAccount(accountInfo: AccountInfo) {

        const hashedPassword = await this.hashPassword(accountInfo.password);

        return this.prisma.user.create({
            data: {
                userId: accountInfo.userId,
                name: accountInfo.name,
                account: {
                    create: {
                        password: hashedPassword,
                    },
                },
            },
        });
    }
    async changePassword(changePassword: ChangePassword) {
        const hashedPassword = await this.hashPassword(changePassword.password);

        return this.prisma.account.update({
            where: {
                userId: changePassword.userId,
            },
            data: {
                password: hashedPassword,
            },
        });
    }
    async login(loginInfo:LoginInfo): Promise<boolean> {
        const hashedPassword = await this.hashPassword(loginInfo.password);
        const account = await this.prisma.account.findUnique({
            where: {
                userId: loginInfo.userId,
            },
        });
        if (account) {
            return account.password === hashedPassword;
        }
        return false;
    }
    private async hashPassword(password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const hash = createHash('sha256');
            hash.on('error', reject);
            hash.on('readable', () => {
                const data = hash.read();
                if (data) {
                    resolve(data.toString('hex'));
                }
            });
            hash.write(password);
            hash.end();
        });
    }
}