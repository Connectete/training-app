import { AccountInfo, ChangePassword, LoginInfo } from "@/domain/account.type";

export const ACCOUNT_REPOSITORY = Symbol.for('ACCOUNT_REPOSITORY');

export interface AccountRepository {

    /**
     *
     * @param userId
     */
    createAccount(accountInfo: AccountInfo);
    changePassword(changePassword: ChangePassword);
    login(loginInfo: LoginInfo): Promise<boolean>;
}