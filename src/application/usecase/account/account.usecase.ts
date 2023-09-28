import { Inject, Injectable } from '@nestjs/common';
import { ACCOUNT_REPOSITORY, AccountRepository } from '@/infrastructure/interfaces/account.type';
import { AccountInfo,ChangePassword, LoginInfo } from '@/domain/account.type';

@Injectable()
export class AccountUseCase {
    constructor(
        @Inject(ACCOUNT_REPOSITORY)
        private readonly accountRepository: AccountRepository,
    ) {}

    /**
     * アカウントを作成する
     * @param accountInfo
     *
     */
    async createAccount(accountInfo: AccountInfo): Promise<boolean> {
        return this.accountRepository.createAccount(accountInfo);
    }
    async changePassword(changePassword: ChangePassword): Promise<boolean> {
        return this.accountRepository.changePassword(changePassword);
    }
    async login(loginInfo: LoginInfo): Promise<boolean> {
        return this.accountRepository.login(loginInfo);
    }
}